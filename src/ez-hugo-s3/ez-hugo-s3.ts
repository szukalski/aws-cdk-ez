import { DnsValidatedCertificate } from 'aws-cdk-lib/aws-certificatemanager';
import {
  AllowedMethods,
  CachePolicy,
  Distribution,
  Function,
  FunctionCode,
  FunctionEventType,
  SecurityPolicyProtocol,
  ViewerProtocolPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { ARecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';

export interface IEzHugoS3Props {
  /**
   * Path to Hugo public directory, which is generated after running the `hugo` command
   *
   * By default, this will be the `public` directory in your hugo project
   */
  readonly publicDir: string;

  /**
   * Domain name of the site deploying to
   *
   * You should already have a hosted zone in the account you're deploying to with this domain name
   */
  readonly domainName: string;
}

export class EzHugoS3 extends Construct {
  public readonly publicDir: string;
  public readonly domainName: string;
  public readonly region?: string;

  constructor(scope: Construct, id: string, props: IEzHugoS3Props) {
    super(scope, id);

    this.publicDir = props.publicDir;
    this.domainName = props.domainName;

    const bucket = new Bucket(this, 'WebsiteBucket', {
      publicReadAccess: false,
    });
    const zone = HostedZone.fromLookup(this, 'HostedZone', {
      domainName: this.domainName,
    });
    const certificate = new DnsValidatedCertificate(this, 'Certificate', {
      hostedZone: zone,
      domainName: this.domainName,
    });

    const cfFunction = new Function(this, 'HugoPaths', {
      code: FunctionCode.fromInline(`function handler(event) {
  var request = event.request;
  var uri = request.uri;
  if (uri.endsWith('/')) {
    request.uri += 'index.html';
  } else if (!uri.includes('.')) {
    request.uri += '/index.html';
  }
  return request;
}
`),
    });

    const distribution = new Distribution(this, 'Distribution', {
      defaultBehavior: {
        origin: new S3Origin(bucket),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: AllowedMethods.ALLOW_GET_HEAD,
        cachePolicy: CachePolicy.CACHING_OPTIMIZED,
        functionAssociations: [
          {
            function: cfFunction,
            eventType: FunctionEventType.VIEWER_REQUEST,
          },
        ],
      },
      domainNames: [this.domainName],
      certificate,
      minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2_2021,
      errorResponses: [
        {
          httpStatus: 403,
          responsePagePath: '/index.html',
          responseHttpStatus: 200,
        },
        {
          httpStatus: 404,
          responsePagePath: '/index.html',
          responseHttpStatus: 200,
        },
      ],
    });

    // deploy code
    new BucketDeployment(this, 'BucketDeployment', {
      sources: [Source.asset(`${this.publicDir}/`)],
      destinationBucket: bucket,
      distribution,
      distributionPaths: ['/', '/index.html'],
    });

    // Route53
    new ARecord(this, 'Alias', {
      zone,
      recordName: this.domainName,
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
    });
  }
}
