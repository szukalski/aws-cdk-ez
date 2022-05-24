import { App, Stack } from 'aws-cdk-lib';
import { InstanceClass, InstanceSize, InstanceType, SubnetType } from 'aws-cdk-lib/aws-ec2';
import { AuroraPostgresEngineVersion, DatabaseClusterEngine } from 'aws-cdk-lib/aws-rds';
import { EzAuroraCluster } from '../ez-aurora/ez-aurora';
import { EzPostgresLambdaQuery } from '../ez-postgres/ez-postgres';
import { EzVpc } from '../ez-vpc/ez-vpc';

const env = { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION };

const app = new App();
const stack = new Stack(app, 'test', { env: env });
const vpc = new EzVpc(stack, 'Vpc', {
  enableSubnetPrivateNat: true,
}).vpc;
const cluster = new EzAuroraCluster(stack, 'Cluster', {
  databaseClusterProps: {
    instanceProps: {
      vpc: vpc,
      vpcSubnets: { subnetType: SubnetType.PRIVATE_WITH_NAT },
      instanceType: InstanceType.of(InstanceClass.R6G, InstanceSize.LARGE),
    },
    engine: DatabaseClusterEngine.auroraPostgres({
      version: AuroraPostgresEngineVersion.VER_13_4,
    }),
    defaultDatabaseName: 'test',
    instances: 1,
  },
}).cluster;
new EzPostgresLambdaQuery(stack, 'PostgresLambdaQuery', {
  databaseCluster: cluster,
});