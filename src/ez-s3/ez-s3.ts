import { CfnOutput, RemovalPolicy } from 'aws-cdk-lib';
import { BlockPublicAccess, Bucket, BucketEncryption, BucketProps } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

/**
 * Definition of S3 Bucket
 */
export interface IEzS3BucketProps {
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
    new CfnOutput(
      this,
      'BucketName', {
        value: this.bucket.bucketName,
      },
    );
  }
}