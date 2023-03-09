const { awscdk } = require('projen');
// const disableGithub = {
//   buildWorkflow: false,
//   releaseWorkflow: false,
//   pullRequestTemplate: false,
//   dependabot: false,
//   mergify: false,
// };
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'David Roberts',
  authorAddress: 'szukalski@gmail.com',
  cdkVersion: '2.68.0',
  defaultReleaseBranch: 'main',
  name: 'aws-cdk-ez',
  license: 'MIT',
  repositoryUrl: 'git@github.com:szukalski/aws-cdk-ez.git',
  npmDistTag: 'latest',
  releaseToNpm: true,
  devDeps: ['yarn'],
  deps: ['@aws-cdk/aws-lambda-go-alpha'],
  //peerDeps: ['@aws-cdk/aws-lambda-go-alpha@^2.45.0-alpha.0'],
  //...disableGithub,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  // release: undefined,      /* Add release management to this project. */
});
project.addGitIgnore('.awsprofile');
project.addGitIgnore('.envrc');
project.addGitIgnore('tsconfig.json');
project.addGitIgnore('**/cdk.out');
project.addGitIgnore('**/*.js');
project.addGitIgnore('**/*.d.ts');
project.addGitIgnore('cdk.context.json');
project.addGitIgnore('**/package-lock.json');
project.synth();
