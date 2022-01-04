import { CfnOutput, RemovalPolicy } from 'aws-cdk-lib';
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
  deploySource?: string;

  /**
   * Deployment prefix.
   * 
   * Source content will be deployed with this key prefix, ie. 'web/static'
   * 
   * @default - undefined
   */
  deployKeyPrefix?: string;

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
      enforceSSL: true,
      encryption: BucketEncryption.KMS,
      bucketKeyEnabled: true,
      serverAccessLogsPrefix: 'logs',
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      ...props?.bucketProps,
    });

    if (props?.deploySource) {
      new BucketDeployment(this, 'BucketDeploy', {
        sources: [Source.asset(props.deploySource)],
        destinationBucket: this.bucket,
        destinationKeyPrefix: props?.deployKeyPrefix ?? '/',
      })
    };

    new CfnOutput(
      this,
      'BucketName', {
        value: this.bucket.bucketName,
      },
    );
  }
}