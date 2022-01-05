import { App, Stack } from 'aws-cdk-lib';
import { EzS3Bucket } from './ez-s3';

const env = { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION };

const app = new App();
const stack = new Stack(app, 'test', { env: env });
new EzS3Bucket(stack, 'Bucket', {
  enableWebDistribution: true,
  deploymentSource: './lib',
});