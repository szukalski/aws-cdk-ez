# AWS CDK EZ

[![Source](https://img.shields.io/badge/Source-GitHub-blue?logo=github)][source]
[![Release](https://github.com/szukalski/aws-cdk-ez/actions/workflows/release.yml/badge.svg)](https://github.com/szukalski/aws-cdk-ez/actions/workflows/release.yml)
[![License](https://img.shields.io/github/license/szukalski/aws-cdk-ez)][license]
[![Docs](https://img.shields.io/badge/Construct%20Hub-aws--cdk--ez-orange)][docs]

[![npm package](https://img.shields.io/npm/v/aws-cdk-ez?color=brightgreen)][npm]

![Downloads](https://img.shields.io/badge/-DOWNLOADS:-brightgreen?color=gray)
[![npm](https://img.shields.io/npm/dt/aws-cdk-ez?label=npm&color=blueviolet)][npm]

Opinionated AWS CDK Constructs to easily build Proof-of-Concepts.

The general approach is to extend the native AWS CDK construct with some opinionated ease-of-use options.

Supplied props for the native construct will take precedence over the EZ construct options. (ie. In ez-vpc, if you specify a subnetConfiguration in vpcProps, then it will ignore any enableSubnet* flags.) 
This allows for customisation of the deployed construct against the opinionated defaults.

  [source]: https://github.com/szukalski/aws-cdk-ez
  [license]: https://github.com/szukalski/aws-cdk-ez/blob/main/LICENSE
  [docs]: https://constructs.dev/packages/aws-cdk-ez/
  [npm]: https://www.npmjs.com/package/aws-cdk-ez