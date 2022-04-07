import { CfnOutput, RemovalPolicy } from 'aws-cdk-lib';
import { InstanceClass, InstanceSize, InstanceType, IVpc, SubnetType } from 'aws-cdk-lib/aws-ec2';
import { AuroraPostgresEngineVersion, DatabaseClusterEngine, CfnDBCluster, CfnGlobalCluster, DatabaseCluster, DatabaseClusterProps, IClusterEngine } from 'aws-cdk-lib/aws-rds';
import { Construct } from 'constructs';
import { EzVpc } from '..';

/**
 * Definition of EZ Aurora Cluster
 */
export interface IEzAuroraClusterProps {
  /**
   * Database engine to use
   *
   * @default - PostgreSQL 13.4
   */
  engine?: IClusterEngine;

  /**
   * VPC to deploy into.
   *
   * @default - undefined, if left undefined then a new VPC with private isolated subnets will be created.
   */
  vpc?: IVpc;

  /**
   * Number of database instances to deploy
   *
   * @default - 1
   */
  instances?: number;

  /**
   * Database cluster props, these will take precedence
   *
   * @default - undefined
   */
  databaseClusterProps?: DatabaseClusterProps;
}

/**
 * Definition of EZ Aurora Global Cluster
 */
export interface IEzAuroraGlobalClusterProps extends IEzAuroraClusterProps {
  /**
   * Global Cluster Identifier.
   *
   * Required.
   */
  globalClusterIdentifier: string;

  /**
   * Makes the cluster primary in the global cluster. If not true, then the cluster attempts to join an existing global cluster.
   *
   * @default - undefined
   */
  isPrimary?: boolean;
}

/**
 * An EZ Aurora Cluster
 *
 * If no VPC is provided, then a VPC with private isolated subnets is created
 *
 */
export class EzAuroraCluster extends Construct {
  public readonly cluster: DatabaseCluster;
  public readonly vpc: IVpc;
  constructor(scope: Construct, id: string, props: IEzAuroraClusterProps) {
    super(scope, id);
    this.vpc =
      props?.databaseClusterProps?.instanceProps?.vpc ??
      props?.vpc ??
      new EzVpc(this, 'Vpc', {
        enableSubnetPrivateIsolated: true,
      }).vpc;
    this.cluster = new DatabaseCluster(this, 'Cluster', {
      engine:
        props?.databaseClusterProps?.engine ??
        props?.engine ??
        DatabaseClusterEngine.auroraPostgres({ version: AuroraPostgresEngineVersion.VER_13_4 }),
      instanceProps: {
        vpc: this.vpc,
        vpcSubnets: { subnetType: SubnetType.PRIVATE_ISOLATED },
        instanceType: InstanceType.of(InstanceClass.R6G, InstanceSize.LARGE),
      },
      removalPolicy: RemovalPolicy.DESTROY,
      instances: props?.instances ?? 1,
      ...props?.databaseClusterProps,
    });
    new CfnOutput(
      this,
      'ClusterIdentifier', {
        value: this.cluster.clusterIdentifier,
      },
    );
    new CfnOutput(
      this,
      'ClusterWriteEndpoint', {
        value: this.cluster.clusterEndpoint.hostname,
      },
    );
    new CfnOutput(
      this,
      'ClusterReadEndpoint', {
        value: this.cluster.clusterReadEndpoint.hostname,
      },
    );
  }
}

/**
 * An EZ Aurora Global Cluster
 *
 * If no VPC is provided, then a VPC with private isolated subnets is created.
 * Default behaviour is to join an existing Global Cluster, which will fail if it does not exist.
 *
 */
export class EzAuroraGlobalCluster extends Construct {
  public readonly cluster: DatabaseCluster;
  public readonly vpc: IVpc;
  constructor(scope: Construct, id: string, props: IEzAuroraGlobalClusterProps) {
    super(scope, id);
    const cluster = new EzAuroraCluster(
      this,
      'RegionalCluster',
      props,
    );
    this.cluster = cluster.cluster;
    this.vpc = cluster.vpc;
    if (props?.isPrimary) {
      const globalCluster = new CfnGlobalCluster(
        this,
        'GlobalCluster',
        {
          sourceDbClusterIdentifier: this.cluster.clusterIdentifier,
          globalClusterIdentifier: props.globalClusterIdentifier,
        },
      );
      globalCluster.node.addDependency(this.cluster);
    } else {
      const cfnCluster = this.cluster.node.defaultChild as CfnDBCluster;
      cfnCluster.masterUsername = undefined;
      cfnCluster.masterUserPassword = undefined;
      cfnCluster.globalClusterIdentifier = props.globalClusterIdentifier;
    }
  }
}