const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'David Roberts',
  authorAddress: 'szukalski@gmail.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'aws-cdk-ez',
  repositoryUrl: 'git@github.com:szukalski/aws-cdk-ez.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.synth();