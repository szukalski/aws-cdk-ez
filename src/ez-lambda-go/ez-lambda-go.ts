import { Duration } from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { GoFunction, GoFunctionProps } from '@aws-cdk/aws-lambda-go-alpha';
import { Construct } from 'constructs';

export interface IEzLambdaGoProps {
  entry: string;
  goFunctionProps?: GoFunctionProps;
  functionName?: string | undefined;
  timeout?: Duration;
  vpc?: Vpc | undefined;
}

export class EzLambdaGoFunction extends Construct {
  constructor(scope: Construct, id: string, props: IEzLambdaGoProps) {
    super(scope, id);
    new GoFunction(this, 'GoFunction', {
      entry: props.entry,
      vpc: props.vpc,
      functionName: props?.functionName,
      timeout: props?.timeout ?? Duration.seconds(180),
      ...props?.goFunctionProps,
    });
  }
}
