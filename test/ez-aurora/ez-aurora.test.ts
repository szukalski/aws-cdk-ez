import { App, assertions, Stack } from 'aws-cdk-lib';
import { AuroraPostgresEngineVersion, DatabaseClusterEngine } from 'aws-cdk-lib/aws-rds';
import { EzAuroraCluster, EzAuroraGlobalCluster } from '../../src/ez-aurora/ez-aurora';

const envPrimary = { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'eu-west-1' };
const envSecondary = { account: process.env.CDK_DEFAULT_ACCOUNT, region: 'eu-central-1' };
const engine = DatabaseClusterEngine.auroraPostgres({ version: AuroraPostgresEngineVersion.VER_13_4 });
const globalClusterIdentifier = 'test';

test('Test EZ Aurora Cluster with Defaults', () => {
  const app = new App();
  const stack = new Stack(app, 'testing-aurora', { env: envPrimary });
  new EzAuroraCluster(stack, 'Cluster', { engine: engine });
  const template = assertions.Template.fromStack(stack);
  template.findResources('AWS::RDS::DBCluster');
  template.resourceCountIs('AWS::RDS::DBCluster', 1);
  template.hasResourceProperties('AWS::RDS::DBCluster', {
    Engine: 'aurora-postgresql',
    EngineVersion: '13.4',
  });
});
test('Test EZ Aurora Global Cluster with Defaults', () => {
  const appPrimary = new App();
  const stackPrimary = new Stack(appPrimary, 'aurora-global-primary', { env: envPrimary });
  new EzAuroraGlobalCluster(stackPrimary, 'ClusterPrimary', {
    engine: engine,
    globalClusterIdentifier: globalClusterIdentifier,
    isPrimary: true,
  });
  const templatePrimary = assertions.Template.fromStack(stackPrimary);
  templatePrimary.findResources('AWS::RDS::DBCluster');
  templatePrimary.resourceCountIs('AWS::RDS::DBCluster', 1);
  templatePrimary.hasResourceProperties('AWS::RDS::DBCluster', {
    Engine: 'aurora-postgresql',
    EngineVersion: '13.4',
  });
  templatePrimary.resourceCountIs('AWS::RDS::GlobalCluster', 1);
  templatePrimary.hasResourceProperties('AWS::RDS::GlobalCluster', {
    GlobalClusterIdentifier: globalClusterIdentifier,
  });
  const appSecondary = new App();
  const stackSecondary = new Stack(appSecondary, 'aurora-global-secondary', { env: envSecondary });
  new EzAuroraGlobalCluster(stackSecondary, 'ClusterSecondary', {
    engine: engine,
    globalClusterIdentifier: globalClusterIdentifier,
  });
  const templateSecondary = assertions.Template.fromStack(stackSecondary);
  templateSecondary.findResources('AWS::RDS::DBCluster');
  templateSecondary.resourceCountIs('AWS::RDS::DBCluster', 1);
  templateSecondary.hasResourceProperties('AWS::RDS::DBCluster', {
    Engine: 'aurora-postgresql',
    EngineVersion: '13.4',
    GlobalClusterIdentifier: globalClusterIdentifier,
  });
  templateSecondary.resourceCountIs('AWS::RDS::GlobalCluster', 0);
});
