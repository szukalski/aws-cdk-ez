import { CfnOutput } from 'aws-cdk-lib';
import { AmazonLinuxGeneration, IMachineImage, Instance, InstanceClass, InstanceProps, InstanceSize, InstanceType, IVpc, MachineImage, SecurityGroup, Vpc } from 'aws-cdk-lib/aws-ec2';
import { IRole, ManagedPolicy, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { EzVpc } from '..';

/**
 * An IAM Role for EC2 SSM management.
 */
export class EzEc2SsmRole extends Construct {
  public readonly role: Role;
  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.role = new Role(
      this,
      'Role', {
        assumedBy: new ServicePrincipal('ec2.amazonaws.com'),
      },
    );
    this.role.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore'));
  }
}

/**
 * Definition of EZ EC2 Instance
 */
export interface IEzEc2InstanceProps {
  /**
   * Instance Type to deploy
   *
   * @default - 'T3.Micro'
   */
  instanceType?: InstanceType;

  /**
   * Instance props for the native Instance object, these will take precedence.
   *
   * @default - undefined
   */
  instanceProps?: InstanceProps;

  /**
   * Name of RSA key to deploy instance with.
   *
   * @default - undefined
   */
  keyName?: string;

  /**
   * Machine image to deploy
   *
   * @default - Latest Amazon Linux 2
   */
  machineImage?: IMachineImage;

  /**
   * IAM role to deploy with the instance
   *
   * @default - undefined, if left undefined then a new IAM role with SSM management permissions will be created.
   */

  /**
   * VPC to deploy into.
   *
   * @default - undefined, if left undefined then a new VPC with private NAT subnets will be created.
   */
  vpc?: Vpc;
}

/**
 * An EZ EC2 Instance
 *
 * If no props are provided, then a VPC is created with private NAT subnets.
 */
export class EzEc2Instance extends Construct {
  public readonly instance: Instance;
  public readonly role: IRole;
  public readonly securityGroup: SecurityGroup;
  public readonly vpc: IVpc;
  constructor(scope: Construct, id: string, props?: IEzEc2InstanceProps) {
    super(scope, id);

    this.vpc =
      props?.instanceProps?.vpc ??
      props?.vpc ??
      new EzVpc(this, 'Vpc', {
        enableSubnetPrivateNat: true,
      }).vpc;

    this.role =
      props?.instanceProps?.role ??
      new EzEc2SsmRole(this, 'Role').role;

    this.securityGroup = new SecurityGroup(
      this,
      'SG', {
        vpc: this.vpc,
        allowAllOutbound: true,
        securityGroupName: this+'-sg',
      },
    );
    this.instance = new Instance(this, 'Instance', {
      vpc: this.vpc,
      role: this.role,
      securityGroup: this.securityGroup,
      instanceType:
        props?.instanceType ??
        InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
      machineImage:
        props?.machineImage ??
        MachineImage.latestAmazonLinux({
          generation: AmazonLinuxGeneration.AMAZON_LINUX_2,
        }),
      keyName: props?.keyName,
      ...props?.instanceProps,
    },
    );

    new CfnOutput(
      this,
      'InstanceId', {
        value: this.instance.instanceId,
      },
    );
  }
}
