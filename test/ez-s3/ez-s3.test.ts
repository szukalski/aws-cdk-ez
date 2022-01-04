import { App, assertions, Stack } from 'aws-cdk-lib';
import { BucketEncryption } from 'aws-cdk-lib/aws-s3';
import { EzS3Bucket } from '../../src/ez-s3/ez-s3';

const env = { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION };

test('Test EZ S3 with Defaults', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-s3', { env: env });
  new EzS3Bucket(stack, 'S3');
  const template = assertions.Template.fromStack(stack);
  template.findResources('AWS::S3::Bucket');
  template.resourceCountIs('AWS::S3::Bucket', 1);
  template.hasResourceProperties('AWS::S3::Bucket', {
    BucketEncryption: {
      ServerSideEncryptionConfiguration: [
        {
          BucketKeyEnabled: true,
          ServerSideEncryptionByDefault: {
            KMSMasterKeyID: {
              'Fn::GetAtt': [
                'S3BucketKey978E45A2',
                'Arn',
              ],
            },
            SSEAlgorithm: 'aws:kms',
          },
        },
      ],
    },
    LoggingConfiguration: {
      LogFilePrefix: 'logs',
    },
    PublicAccessBlockConfiguration: {
      BlockPublicAcls: true,
      BlockPublicPolicy: true,
      IgnorePublicAcls: true,
      RestrictPublicBuckets: true,
    },
    Tags: [
      {
        Key: 'aws-cdk:auto-delete-objects',
        Value: 'true',
      },
    ],
  });
});

test('Test EZ S3 over-riding Defaults', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-s3', { env: env });
  new EzS3Bucket(stack, 'S3', {
    bucketProps: {
      bucketKeyEnabled: false,
      encryption: BucketEncryption.S3_MANAGED,
    },
  });
  const template = assertions.Template.fromStack(stack);
  template.findResources('AWS::S3::Bucket');
  template.resourceCountIs('AWS::S3::Bucket', 1);
  template.hasResourceProperties('AWS::S3::Bucket', {
    BucketEncryption: {
      ServerSideEncryptionConfiguration: [
        {
          ServerSideEncryptionByDefault: {
            SSEAlgorithm: 'AES256',
          },
        },
      ],
    },
    LoggingConfiguration: {
      LogFilePrefix: 'logs',
    },
    PublicAccessBlockConfiguration: {
      BlockPublicAcls: true,
      BlockPublicPolicy: true,
      IgnorePublicAcls: true,
      RestrictPublicBuckets: true,
    },
    Tags: [
      {
        Key: 'aws-cdk:auto-delete-objects',
        Value: 'true',
      },
    ],
  });
});
