import { GatewayVpcEndpointAwsService, InterfaceVpcEndpointAwsService, SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export interface IEzVpcProps {
  cidr?: string;
  cidrMask?: number;
  maxAzs?: number;
  enableFlowLog?: boolean;
  enableSubnetPublic?: boolean;
  enableSubnetPrivateNat?: boolean;
  enableSubnetPrivateIsolated?: boolean;
  enableSsmEndpoint?: boolean;
}

export class EzVpc extends Construct {
  public readonly vpc: Vpc;
  constructor(
    scope: Construct,
    id: string,
    props?: IEzVpcProps,
  ) {
    super(scope, id);

    const subnetConfiguration = [];
    if (props?.enableSubnetPublic||props?.enableSubnetPrivateNat) {
      subnetConfiguration.push(
        {
          name: 'public-',
          subnetType: SubnetType.PUBLIC,
          cidrMask: props?.cidrMask ?? 28,
        },
      );
    }
    if (props?.enableSubnetPrivateNat) {
      subnetConfiguration.push(
        {
          name: 'privatenat-',
          subnetType: SubnetType.PRIVATE_WITH_NAT,
          cidrMask: props?.cidrMask ?? 28,
        },
      );
    }
    if (props?.enableSubnetPrivateIsolated || !( props?.enableSubnetPublic || props?.enableSubnetPrivateNat)) {
      subnetConfiguration.push(
        {
          name: 'privateisolated-',
          subnetType: SubnetType.PRIVATE_ISOLATED,
          cidrMask: props?.cidrMask ?? 28,
        },
      );
    }

    const vpc = new Vpc(this, id+'Vpc', {
      cidr: props?.cidr ?? '10.0.0.0/16',
      maxAzs: props?.maxAzs ?? 2,
      subnetConfiguration: subnetConfiguration,
    },
    );

    if (props?.enableSsmEndpoint) {
      vpc.addInterfaceEndpoint('cloudwatchLogsEndpoint', {
        service: InterfaceVpcEndpointAwsService.CLOUDWATCH_LOGS,
      });
      vpc.addInterfaceEndpoint('ec2Endpoint', {
        service: InterfaceVpcEndpointAwsService.EC2,
      });
      vpc.addInterfaceEndpoint('ec2MessagesEndpoint', {
        service: InterfaceVpcEndpointAwsService.EC2_MESSAGES,
      });
      vpc.addInterfaceEndpoint('kmsEndpoint', {
        service: InterfaceVpcEndpointAwsService.KMS,
      });
      vpc.addInterfaceEndpoint('enableSsmEndpoint', {
        service: InterfaceVpcEndpointAwsService.SSM,
      });
      vpc.addInterfaceEndpoint('ssmMessagesEndpoint', {
        service: InterfaceVpcEndpointAwsService.SSM_MESSAGES,
      });
      vpc.addGatewayEndpoint('s3Endpoint', {
        service: GatewayVpcEndpointAwsService.S3,
      });
    }

    if (props?.enableFlowLog) {
      vpc.addFlowLog('FlowLog');
    }

    this.vpc = vpc;
  }
}