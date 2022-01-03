import { GatewayVpcEndpointAwsService, InterfaceVpcEndpointAwsService, SubnetType, Vpc, VpcProps } from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

/**
 * Definition of EZ VPC
 */
export interface IEzVpcProps {

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

  /**
   * VPC props for the VPC object, these will take precendence over any other props.
   *
   * @default - undefined
   *
   */
  vpcProps?: VpcProps;
}

/**
 * An EZ VPC
 *
 * Default is to create an empty VPC.
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
          cidrMask: 28,
        },
      );
    }
    if (props?.enableSubnetPrivateNat) {
      subnetConfiguration.push(
        {
          name: 'privatenat-',
          subnetType: SubnetType.PRIVATE_WITH_NAT,
          cidrMask: 28,
        },
      );
    }
    if (props?.enableSubnetPrivateIsolated) {
      subnetConfiguration.push(
        {
          name: 'privateisolated-',
          subnetType: SubnetType.PRIVATE_ISOLATED,
          cidrMask: 28,
        },
      );
    }

    this.vpc = new Vpc(this, id+'Vpc', {
      maxAzs: 2,
      subnetConfiguration: subnetConfiguration,
      ...props?.vpcProps,
    },
    );

    if (props?.enableSsmEndpoint) {
      this.vpc.addInterfaceEndpoint('cloudwatchLogsEndpoint', {
        service: InterfaceVpcEndpointAwsService.CLOUDWATCH_LOGS,
      });
      this.vpc.addInterfaceEndpoint('ec2Endpoint', {
        service: InterfaceVpcEndpointAwsService.EC2,
      });
      this.vpc.addInterfaceEndpoint('ec2MessagesEndpoint', {
        service: InterfaceVpcEndpointAwsService.EC2_MESSAGES,
      });
      this.vpc.addInterfaceEndpoint('kmsEndpoint', {
        service: InterfaceVpcEndpointAwsService.KMS,
      });
      this.vpc.addInterfaceEndpoint('enableSsmEndpoint', {
        service: InterfaceVpcEndpointAwsService.SSM,
      });
      this.vpc.addInterfaceEndpoint('ssmMessagesEndpoint', {
        service: InterfaceVpcEndpointAwsService.SSM_MESSAGES,
      });
      this.vpc.addGatewayEndpoint('s3Endpoint', {
        service: GatewayVpcEndpointAwsService.S3,
      });
    }

    if (props?.enableFlowLog) {
      this.vpc.addFlowLog('FlowLog');
    }
  }
}