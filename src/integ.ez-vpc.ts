import { App, Stack } from 'aws-cdk-lib';
import { EzVpc } from './ez-vpc';

const env = { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION };

const app = new App();
const stack = new Stack(app, 'test', { env: env });
new EzVpc(stack, 'Vpc');