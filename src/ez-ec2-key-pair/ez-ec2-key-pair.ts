import { KeyPair } from 'cdk-ec2-key-pair';
import { Construct } from 'constructs';

/**
 * Definition of EZ EC2 Key Pair
 */
export interface IEzEc2KeyPairProps {

  /**
   * Name of RSA key to deploy instance with.
   *
   * @default - undefined
   */
  keyName: string;

  /**
   * Public key to use
   *
   * @default - undefined
   */
  publicKey: string;

}

/**
 * An EZ EC2 Key Pair
 */
export class EzEc2KeyPair extends Construct {
  public readonly keyName: string;
  constructor(scope: Construct, id: string, props: IEzEc2KeyPairProps) {
    super(scope, id);
    this.keyName = new KeyPair(this, 'Key-Pair', {
      name: props.keyName,
      publicKey: props.publicKey,
    }).keyPairName;
  }
}
