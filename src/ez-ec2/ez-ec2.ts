import { CfnOutput } from 'aws-cdk-lib';
import { AmazonLinuxGeneration, IMachineImage, Instance, InstanceClass, InstanceSize, InstanceType, MachineImage, SecurityGroup, Vpc } from 'aws-cdk-lib/aws-ec2';
import { ManagedPolicy, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
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
   * VPC to deploy instance into
   *
   * @default - Create a VPC with private NAT subnets
   */
  vpc?: Vpc;

  /**
   * Instance type to deploy
   *
   * @default - t3.micro
   */
  instanceType?: InstanceType;

  /**
   * Machine image to deploy
   *
   * @default - Amazon Linux 2
   */
  machineImage?: IMachineImage;

  /**
   * The IAM Role to associate with the EC2 instance
   *
   * @default - Create a new IAM Role with SSM management permissions
   */
  role?: Role;

  /**
   * RSA Key Name to associate with the EC2 instance
   *
   * @default - undefined
   */
  keyName?: string;
}

/**
 * An EZ EC2 Instance
 *
 * If no props are provided, then a VPC is created with private NAT subnets.
 */
export class EzEc2Instance extends Construct {
  public readonly instance: Instance;
  constructor(scope: Construct, id: string, props?: IEzEc2InstanceProps) {
    super(scope, id);

    const vpc: Vpc = props?.vpc ?? new EzVpc(this, 'Vpc', {
      enableSubnetPrivateNat: true,
    }).vpc;

    const securityGroup = new SecurityGroup(
      this,
      'SG', {
        vpc: vpc,
        allowAllOutbound: true,
        securityGroupName: this+'-sg',
      },
    );
    this.instance = new Instance(this, 'Instance', {
      vpc: vpc,
      role: props?.role ?? new EzEc2SsmRole(this, 'Role').role,
      securityGroup: securityGroup,
      instanceName: id,
      instanceType: props?.instanceType ?? InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
      machineImage: props?.machineImage ?? MachineImage.latestAmazonLinux({
        generation: AmazonLinuxGeneration.AMAZON_LINUX_2,
      }),
      keyName: props?.keyName,
    });

    new CfnOutput(
      this,
      'Output', {
        value: this.instance.instanceId,
      });
  }
}
