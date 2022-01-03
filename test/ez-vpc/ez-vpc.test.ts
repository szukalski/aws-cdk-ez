import { App, assertions, Stack } from 'aws-cdk-lib';
import { EzVpc } from '../../src/ez-vpc/ez-vpc';

const env = { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION };

test('Test EZ VPC with Defaults', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-primary', { env: env });
  new EzVpc(stack, 'Vpc');
  assertions.Template.fromStack(stack).findResources('AWS::EC2::VPC');
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::Subnet', 0);
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::NatGateway', 0);
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::VPCEndpoint', 0);
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::FlowLog', 0);
});

test('Test EZ VPC with FlowLog and isolated subnets', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-primary', { env: env });
  new EzVpc(stack, 'Vpc', {
    enableFlowLog: true,
    enableSubnetPrivateIsolated: true,
  });
  assertions.Template.fromStack(stack).findResources('AWS::EC2::VPC');
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::Subnet', 2);
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::NatGateway', 0);
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::VPCEndpoint', 0);
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::FlowLog', 1);
});

test('Test EZ VPC with SSM Endpoints and isolated subnets', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-primary', { env: env });
  new EzVpc(stack, 'Vpc', {
    enableSsmEndpoint: true,
    enableSubnetPrivateIsolated: true,
  });
  assertions.Template.fromStack(stack).findResources('AWS::EC2::VPC');
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::Subnet', 2);
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::NatGateway', 0);
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::VPCEndpoint', 7);
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::FlowLog', 0);
});

test('Test EZ VPC with Public Subnet', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-primary', { env: env });
  new EzVpc(stack, 'Vpc', {
    enableSubnetPublic: true,
  });
  assertions.Template.fromStack(stack).findResources('AWS::EC2::VPC');
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::Subnet', 2);
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::NatGateway', 0);
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::VPCEndpoint', 0);
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::FlowLog', 0);
});

test('Test EZ VPC with NAT Subnet', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-primary', { env: env });
  new EzVpc(stack, 'Vpc', {
    enableSubnetPrivateNat: true,
  });
  assertions.Template.fromStack(stack).findResources('AWS::EC2::VPC');
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::Subnet', 4);
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::NatGateway', 2);
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::VPCEndpoint', 0);
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::FlowLog', 0);
});

test('Test EZ VPC with All Subnets in 1 AZ', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-primary', { env: env });
  new EzVpc(stack, 'Vpc', {
    enableSubnetPublic: true,
    enableSubnetPrivateNat: true,
    enableSubnetPrivateIsolated: true,
    vpcProps: {
      maxAzs: 1,
    },
  });
  assertions.Template.fromStack(stack).findResources('AWS::EC2::VPC');
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::Subnet', 3);
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::NatGateway', 1);
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::VPCEndpoint', 0);
  assertions.Template.fromStack(stack).resourceCountIs('AWS::EC2::FlowLog', 0);
});