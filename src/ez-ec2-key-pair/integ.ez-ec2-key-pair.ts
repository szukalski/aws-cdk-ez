import { App, Stack } from 'aws-cdk-lib';
import { EzEc2KeyPair } from '..';

const env = { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION };
const keyName = 'test';
const publicKey = 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDKnsL08AKpaFTC1ByhAbrUzBl2bSoWYVOphtMT/oI4gVAH9cyXHXsVFomJb7/vk+YmxscmXrMuzAfnu0ruQ3jcOrodK5AOkrquyQpRbdJVZlViDsZkYQ1pW7FZ6ULKLxKrW8pVuKJyyf/xtV0GEtl8oaHTpJeoyHXccz7jSZqLs6bY3rjPbcGI7ZR9NPikrTpPdjbc5v0Fw/OAK85+N+grgiALiyWiiCnd2jz40NfXAd3gCMMMAXkDIP9j6coK1prHp1DQTPjCvV8YpBpMZIA7emmytN5+3RyriQRmL4J1V2y2f95wbrWYig50zzCU7eArwIFJ2Klk0WGW5lG6qKwR';

const app = new App();
const stack = new Stack(app, 'test', { env: env });
new EzEc2KeyPair(stack, 'Ec2KeyPair', {
  keyName: keyName,
  publicKey: publicKey,
});