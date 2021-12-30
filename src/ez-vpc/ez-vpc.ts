import { GatewayVpcEndpointAwsService, InterfaceVpcEndpointAwsService, SubnetType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

/**
 * Definition of VPC
 */
export interface IEzVpcProps {

  /**
   * The CIDR to use for the VPC
   *
   * @default - '10.0.0.0/16'
   */
  cidr?: string;

  /**
   * The CIDR mask to use for subnets in the VPC
   *
   * The same mask is used for all subnets
   *
   * @default - 28
   */
  cidrMask?: number;

  /**
   * The maximum number of Availability Zones to use for the VPC
   *
   * @default - 2
   */
  maxAzs?: number;

  /**
   * Whether to enable VPC Flow Logs
   *
   * @default - false
   */
  enableFlowLog?: boolean;

  /**
   * Whether to create a public subnet
   *
   * If true, then an Internet Gateway will be created
   *
   * @default - false
   */
  enableSubnetPublic?: boolean;

  /**
   * Whether to create private NAT subnets
   *
   * If true, then public subnets will also be created, with a NAT Gateway per AZ
   *
   * @default - false
   */
  enableSubnetPrivateNat?: boolean;

  /**
   * Whether to create private isolated subnets
   *
   *
   * @default - false
   */
  enableSubnetPrivateIsolated?: boolean;

  /**
   * Whether to create interface endpoints required for SSM to function in an isolated subnet
   *
   * @default - false
   */
  enableSsmEndpoint?: boolean;
}

/**
 * A VPC
 *
 * If no props are provided, or no subnet creation specified, then a VPC with isolated subnets is created.
 *
 */
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