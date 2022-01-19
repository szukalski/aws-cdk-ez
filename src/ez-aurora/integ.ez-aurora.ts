import { App, Stack } from 'aws-cdk-lib';
import { AuroraPostgresEngineVersion, DatabaseClusterEngine } from 'aws-cdk-lib/aws-rds';
import { EzAuroraCluster, EzAuroraGlobalCluster, EzVpc } from '..';

const envPrimary = { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'eu-west-1' };
const envSecondary = { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'eu-central-1' };
const engine = DatabaseClusterEngine.auroraPostgres({ version: AuroraPostgresEngineVersion.VER_13_4 });
const globalClusterIdentifier = 'test';

const app = new App();
const clusterStack = new Stack(app, 'AuroraClusterStack', { env: envPrimary });
const vpc = new EzVpc(clusterStack, 'Vpc', {
  enableSubnetPrivateIsolated: true,
}).vpc;
new EzAuroraCluster(clusterStack, 'AuroraCluster', { engine: engine, vpc: vpc });
const globalClusterPrimaryStack = new Stack(app, 'AuroraGlobalClusterPrimaryStack', { env: envPrimary });
const primary = new EzAuroraGlobalCluster(globalClusterPrimaryStack, 'AuroraGlobalClusterPrimary', {
  engine: engine,
  globalClusterIdentifier: globalClusterIdentifier,
  isPrimary: true,
  vpc: vpc,
});
const globalClusterSecondaryStack = new Stack(app, 'AuroraGlobalClusterSecondaryStack', { env: envSecondary });
const secondary = new EzAuroraGlobalCluster(globalClusterSecondaryStack, 'AuroraGlobalClusterSecondary', {
  engine: engine,
  globalClusterIdentifier: globalClusterIdentifier,
});
secondary.node.addDependency(primary);
