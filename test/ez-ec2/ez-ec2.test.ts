import { App, assertions, Stack } from 'aws-cdk-lib';
import { EzEc2Instance } from '../../src/ez-ec2/ez-ec2';

const env = { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION };

test('Test EZ EC2', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-primary', { env: env });
  new EzEc2Instance(stack, 'Ec2');
  assertions.Template.fromStack(stack).findResources('AWS::EC2::VPC');
  assertions.Template.fromStack(stack).findResources('AWS::EC2::Instance');
});

test('Test EZ EC2 with SSM Enabled', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-primary', { env: env });
  new EzEc2Instance(stack, 'Ec2');
  assertions.Template.fromStack(stack).findResources('AWS::EC2::VPC');
  assertions.Template.fromStack(stack).findResources('AWS::EC2::Instance');
  assertions.Template.fromStack(stack).findResources('AWS::IAM::Role');
});
