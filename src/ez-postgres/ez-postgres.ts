import { join } from 'path';
import { Duration } from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { DatabaseCluster } from 'aws-cdk-lib/aws-rds';
import { Construct } from 'constructs';

export interface IEzPostgresLambdaQueryProps {
  databaseCluster: DatabaseCluster;
  functionName?: string | undefined;
  timeout?: Duration;
  vpc?: Vpc | undefined;
}

export class EzPostgresLambdaQuery extends Construct {
  constructor(scope: Construct, id: string, props: IEzPostgresLambdaQueryProps) {
    super(scope, id);
    const lambdaQuery = new Function(this, 'PostgresQuery', {
      code: Code.fromAsset(join(__dirname, './resources/postgres_query'), {
        bundling: {
          image: Runtime.PYTHON_3_9.bundlingImage,
          command: [
            'bash', '-c',
            'pip install -r requirements.txt -t /asset-output && cp -au . /asset-output',
          ],
        },
      }),
      runtime: Runtime.PYTHON_3_9,
      handler: 'postgres_query.handler',
      vpc: props.vpc,
      functionName: props?.functionName,
      timeout: props?.timeout ?? Duration.seconds(180),
    });
    props.databaseCluster.secret?.grantRead(lambdaQuery);
    props.databaseCluster.connections.allowDefaultPortFrom(lambdaQuery);
  }
}