import { App, Stack } from 'aws-cdk-lib';
import { EzEc2Instance } from '..';

const env = { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION };
const keyName = process.env.CDK_RSA_KEY;

const app = new App();
const stack = new Stack(app, 'test', { env: env });
new EzEc2Instance(stack, 'Ec2', { keyName: keyName });