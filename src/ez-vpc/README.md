# ez-vpc

Creates a VPC with the ability to deploy useful configuration defaults:

* Public, private NAT, and private isolated subnets.
* SSM endpoints for use in isolated VPCs.
* VPC Flow Logs.

VPC Props can be passed as constructor options, which take precedence over any construct options.

Default is to create a 2-AZ VPC with no subnets.
