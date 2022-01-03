import { BlockPublicAccess, Bucket, BucketProps } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class EzS3Bucket extends Construct {
  public readonly bucket: Bucket;
  constructor(scope: Construct, id: string, props?: BucketProps) {
    super(scope, id);
    this.bucket = new Bucket(this, 'Bucket', {
      blockPublicAccess: props?.blockPublicAccess ?? BlockPublicAccess.BLOCK_ALL,
      ...props,
    });
  }
}