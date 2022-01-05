import { CfnOutput, RemovalPolicy } from 'aws-cdk-lib';
import { CloudFrontAllowedMethods, CloudFrontWebDistribution, OriginAccessIdentity } from 'aws-cdk-lib/aws-cloudfront';
import { BlockPublicAccess, Bucket, BucketEncryption, BucketProps } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';

/**
 * Definition of S3 Bucket
 */
export interface IEzS3BucketProps {
  /**
   * Source content to deploy to the S3 Bucket.
   *
   * This can be either a local .zip file, or a local directory. Ie. './src/file.zip'. Contents of a .zip will be extracted.
   *
   * @default - undefined
   */
  deploymentSource?: string;

  /**
   * Deployment prefix.
   *
   * Source content will be deployed with this key prefix, ie. 'web/static'
   *
   * @default - undefined
   */
  deployKeyPrefix?: string;

  /**
   * Deploy a CloudFront Web Distribution with the bucket as source
   *
   * @default - undefined
   */
  enableWebDistribution?: boolean;

  /**
   * S3 Bucket props for the native Bucket object, these will take precedence.
   */
  bucketProps?: BucketProps;
}

/**
 * An EZ S3 Bucket
 */
export class EzS3Bucket extends Construct {
  public readonly bucket: Bucket;
  constructor(scope: Construct, id: string, props?: IEzS3BucketProps) {
    super(scope, id);
    this.bucket = new Bucket(this, 'Bucket', {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      publicReadAccess: false,
      enforceSSL: true,
      encryption: BucketEncryption.S3_MANAGED,
      serverAccessLogsPrefix: 'logs',
      versioned: true,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      ...props?.bucketProps,
    });
    new CfnOutput(
      this,
      'BucketName', {
        value: this.bucket.bucketName,
      },
    );

    if (props?.deploymentSource) {
      new BucketDeployment(this, 'BucketDeploy', {
        sources: [Source.asset(props.deploymentSource)],
        destinationBucket: this.bucket,
        destinationKeyPrefix: props?.deployKeyPrefix ?? '/',
      });
    };

    if (props?.enableWebDistribution) {
      const cloudfrontOAI = new OriginAccessIdentity(this, 'Cloudfront-OAI', {
        comment: `OAI for ${id}`,
      });
      this.bucket.grantRead(cloudfrontOAI);
      new CloudFrontWebDistribution(this, 'Distribution', {
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: this.bucket,
              originAccessIdentity: cloudfrontOAI,
            },
            behaviors: [{
              isDefaultBehavior: true,
              compress: true,
              allowedMethods: CloudFrontAllowedMethods.GET_HEAD_OPTIONS,
            }],
          },
        ],
      });
    }
  }
}