# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### EzAuroraCluster <a name="aws-cdk-ez.EzAuroraCluster" id="awscdkezezauroracluster"></a>

An EZ Aurora Cluster.

If no VPC is provided, then a VPC with private isolated subnets is created

#### Initializers <a name="aws-cdk-ez.EzAuroraCluster.Initializer" id="awscdkezezauroraclusterinitializer"></a>

```typescript
import { EzAuroraCluster } from 'aws-cdk-ez'

new EzAuroraCluster(scope: Construct, id: string, props: IEzAuroraClusterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#awscdkezezauroraclusterparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#awscdkezezauroraclusterparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#awscdkezezauroraclusterparameterprops)<span title="Required">*</span> | [`aws-cdk-ez.IEzAuroraClusterProps`](#aws-cdk-ez.IEzAuroraClusterProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-ez.EzAuroraCluster.parameter.scope" id="awscdkezezauroraclusterparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-ez.EzAuroraCluster.parameter.id" id="awscdkezezauroraclusterparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="aws-cdk-ez.EzAuroraCluster.parameter.props" id="awscdkezezauroraclusterparameterprops"></a>

- *Type:* [`aws-cdk-ez.IEzAuroraClusterProps`](#aws-cdk-ez.IEzAuroraClusterProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`cluster`](#awscdkezezauroraclusterpropertycluster)<span title="Required">*</span> | [`aws-cdk-lib.aws_rds.DatabaseCluster`](#aws-cdk-lib.aws_rds.DatabaseCluster) | *No description.* |
| [`vpc`](#awscdkezezauroraclusterpropertyvpc)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="aws-cdk-ez.EzAuroraCluster.property.cluster" id="awscdkezezauroraclusterpropertycluster"></a>

```typescript
public readonly cluster: DatabaseCluster;
```

- *Type:* [`aws-cdk-lib.aws_rds.DatabaseCluster`](#aws-cdk-lib.aws_rds.DatabaseCluster)

---

##### `vpc`<sup>Required</sup> <a name="aws-cdk-ez.EzAuroraCluster.property.vpc" id="awscdkezezauroraclusterpropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

---


### EzAuroraGlobalCluster <a name="aws-cdk-ez.EzAuroraGlobalCluster" id="awscdkezezauroraglobalcluster"></a>

An EZ Aurora Global Cluster.

If no VPC is provided, then a VPC with private isolated subnets is created. Default behaviour is to join an existing Global Cluster, which will fail if it does not exist.

#### Initializers <a name="aws-cdk-ez.EzAuroraGlobalCluster.Initializer" id="awscdkezezauroraglobalclusterinitializer"></a>

```typescript
import { EzAuroraGlobalCluster } from 'aws-cdk-ez'

new EzAuroraGlobalCluster(scope: Construct, id: string, props: IEzAuroraGlobalClusterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#awscdkezezauroraglobalclusterparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#awscdkezezauroraglobalclusterparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#awscdkezezauroraglobalclusterparameterprops)<span title="Required">*</span> | [`aws-cdk-ez.IEzAuroraGlobalClusterProps`](#aws-cdk-ez.IEzAuroraGlobalClusterProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-ez.EzAuroraGlobalCluster.parameter.scope" id="awscdkezezauroraglobalclusterparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-ez.EzAuroraGlobalCluster.parameter.id" id="awscdkezezauroraglobalclusterparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Required</sup> <a name="aws-cdk-ez.EzAuroraGlobalCluster.parameter.props" id="awscdkezezauroraglobalclusterparameterprops"></a>

- *Type:* [`aws-cdk-ez.IEzAuroraGlobalClusterProps`](#aws-cdk-ez.IEzAuroraGlobalClusterProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`cluster`](#awscdkezezauroraglobalclusterpropertycluster)<span title="Required">*</span> | [`aws-cdk-lib.aws_rds.DatabaseCluster`](#aws-cdk-lib.aws_rds.DatabaseCluster) | *No description.* |
| [`vpc`](#awscdkezezauroraglobalclusterpropertyvpc)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | *No description.* |

---

##### `cluster`<sup>Required</sup> <a name="aws-cdk-ez.EzAuroraGlobalCluster.property.cluster" id="awscdkezezauroraglobalclusterpropertycluster"></a>

```typescript
public readonly cluster: DatabaseCluster;
```

- *Type:* [`aws-cdk-lib.aws_rds.DatabaseCluster`](#aws-cdk-lib.aws_rds.DatabaseCluster)

---

##### `vpc`<sup>Required</sup> <a name="aws-cdk-ez.EzAuroraGlobalCluster.property.vpc" id="awscdkezezauroraglobalclusterpropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

---


### EzEc2Instance <a name="aws-cdk-ez.EzEc2Instance" id="awscdkezezec2instance"></a>

An EZ EC2 Instance.

If no props are provided, then a VPC is created with private NAT subnets.

#### Initializers <a name="aws-cdk-ez.EzEc2Instance.Initializer" id="awscdkezezec2instanceinitializer"></a>

```typescript
import { EzEc2Instance } from 'aws-cdk-ez'

new EzEc2Instance(scope: Construct, id: string, props?: IEzEc2InstanceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#awscdkezezec2instanceparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#awscdkezezec2instanceparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#awscdkezezec2instanceparameterprops) | [`aws-cdk-ez.IEzEc2InstanceProps`](#aws-cdk-ez.IEzEc2InstanceProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-ez.EzEc2Instance.parameter.scope" id="awscdkezezec2instanceparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-ez.EzEc2Instance.parameter.id" id="awscdkezezec2instanceparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="aws-cdk-ez.EzEc2Instance.parameter.props" id="awscdkezezec2instanceparameterprops"></a>

- *Type:* [`aws-cdk-ez.IEzEc2InstanceProps`](#aws-cdk-ez.IEzEc2InstanceProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`instance`](#awscdkezezec2instancepropertyinstance)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.Instance`](#aws-cdk-lib.aws_ec2.Instance) | *No description.* |
| [`role`](#awscdkezezec2instancepropertyrole)<span title="Required">*</span> | [`aws-cdk-lib.aws_iam.IRole`](#aws-cdk-lib.aws_iam.IRole) | *No description.* |
| [`securityGroup`](#awscdkezezec2instancepropertysecuritygroup)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.SecurityGroup`](#aws-cdk-lib.aws_ec2.SecurityGroup) | *No description.* |
| [`vpc`](#awscdkezezec2instancepropertyvpc)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | *No description.* |

---

##### `instance`<sup>Required</sup> <a name="aws-cdk-ez.EzEc2Instance.property.instance" id="awscdkezezec2instancepropertyinstance"></a>

```typescript
public readonly instance: Instance;
```

- *Type:* [`aws-cdk-lib.aws_ec2.Instance`](#aws-cdk-lib.aws_ec2.Instance)

---

##### `role`<sup>Required</sup> <a name="aws-cdk-ez.EzEc2Instance.property.role" id="awscdkezezec2instancepropertyrole"></a>

```typescript
public readonly role: IRole;
```

- *Type:* [`aws-cdk-lib.aws_iam.IRole`](#aws-cdk-lib.aws_iam.IRole)

---

##### `securityGroup`<sup>Required</sup> <a name="aws-cdk-ez.EzEc2Instance.property.securityGroup" id="awscdkezezec2instancepropertysecuritygroup"></a>

```typescript
public readonly securityGroup: SecurityGroup;
```

- *Type:* [`aws-cdk-lib.aws_ec2.SecurityGroup`](#aws-cdk-lib.aws_ec2.SecurityGroup)

---

##### `vpc`<sup>Required</sup> <a name="aws-cdk-ez.EzEc2Instance.property.vpc" id="awscdkezezec2instancepropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

---


### EzEc2SsmRole <a name="aws-cdk-ez.EzEc2SsmRole" id="awscdkezezec2ssmrole"></a>

An IAM Role for EC2 SSM management.

#### Initializers <a name="aws-cdk-ez.EzEc2SsmRole.Initializer" id="awscdkezezec2ssmroleinitializer"></a>

```typescript
import { EzEc2SsmRole } from 'aws-cdk-ez'

new EzEc2SsmRole(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#awscdkezezec2ssmroleparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#awscdkezezec2ssmroleparameterid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-ez.EzEc2SsmRole.parameter.scope" id="awscdkezezec2ssmroleparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-ez.EzEc2SsmRole.parameter.id" id="awscdkezezec2ssmroleparameterid"></a>

- *Type:* `string`

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`role`](#awscdkezezec2ssmrolepropertyrole)<span title="Required">*</span> | [`aws-cdk-lib.aws_iam.Role`](#aws-cdk-lib.aws_iam.Role) | *No description.* |

---

##### `role`<sup>Required</sup> <a name="aws-cdk-ez.EzEc2SsmRole.property.role" id="awscdkezezec2ssmrolepropertyrole"></a>

```typescript
public readonly role: Role;
```

- *Type:* [`aws-cdk-lib.aws_iam.Role`](#aws-cdk-lib.aws_iam.Role)

---


### EzS3Bucket <a name="aws-cdk-ez.EzS3Bucket" id="awscdkezezs3bucket"></a>

An EZ S3 Bucket.

#### Initializers <a name="aws-cdk-ez.EzS3Bucket.Initializer" id="awscdkezezs3bucketinitializer"></a>

```typescript
import { EzS3Bucket } from 'aws-cdk-ez'

new EzS3Bucket(scope: Construct, id: string, props?: IEzS3BucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#awscdkezezs3bucketparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#awscdkezezs3bucketparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#awscdkezezs3bucketparameterprops) | [`aws-cdk-ez.IEzS3BucketProps`](#aws-cdk-ez.IEzS3BucketProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-ez.EzS3Bucket.parameter.scope" id="awscdkezezs3bucketparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-ez.EzS3Bucket.parameter.id" id="awscdkezezs3bucketparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="aws-cdk-ez.EzS3Bucket.parameter.props" id="awscdkezezs3bucketparameterprops"></a>

- *Type:* [`aws-cdk-ez.IEzS3BucketProps`](#aws-cdk-ez.IEzS3BucketProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`bucket`](#awscdkezezs3bucketpropertybucket)<span title="Required">*</span> | [`aws-cdk-lib.aws_s3.Bucket`](#aws-cdk-lib.aws_s3.Bucket) | *No description.* |

---

##### `bucket`<sup>Required</sup> <a name="aws-cdk-ez.EzS3Bucket.property.bucket" id="awscdkezezs3bucketpropertybucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* [`aws-cdk-lib.aws_s3.Bucket`](#aws-cdk-lib.aws_s3.Bucket)

---


### EzVpc <a name="aws-cdk-ez.EzVpc" id="awscdkezezvpc"></a>

An EZ VPC.

Default is to create an empty VPC.

#### Initializers <a name="aws-cdk-ez.EzVpc.Initializer" id="awscdkezezvpcinitializer"></a>

```typescript
import { EzVpc } from 'aws-cdk-ez'

new EzVpc(scope: Construct, id: string, props?: IEzVpcProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#awscdkezezvpcparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#awscdkezezvpcparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#awscdkezezvpcparameterprops) | [`aws-cdk-ez.IEzVpcProps`](#aws-cdk-ez.IEzVpcProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="aws-cdk-ez.EzVpc.parameter.scope" id="awscdkezezvpcparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="aws-cdk-ez.EzVpc.parameter.id" id="awscdkezezvpcparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="aws-cdk-ez.EzVpc.parameter.props" id="awscdkezezvpcparameterprops"></a>

- *Type:* [`aws-cdk-ez.IEzVpcProps`](#aws-cdk-ez.IEzVpcProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`vpc`](#awscdkezezvpcpropertyvpc)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.Vpc`](#aws-cdk-lib.aws_ec2.Vpc) | *No description.* |

---

##### `vpc`<sup>Required</sup> <a name="aws-cdk-ez.EzVpc.property.vpc" id="awscdkezezvpcpropertyvpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.Vpc`](#aws-cdk-lib.aws_ec2.Vpc)

---




## Protocols <a name="Protocols" id="protocols"></a>

### IEzAuroraClusterProps <a name="aws-cdk-ez.IEzAuroraClusterProps" id="awscdkeziezauroraclusterprops"></a>

- *Implemented By:* [`aws-cdk-ez.IEzAuroraClusterProps`](#aws-cdk-ez.IEzAuroraClusterProps), [`aws-cdk-ez.IEzAuroraGlobalClusterProps`](#aws-cdk-ez.IEzAuroraGlobalClusterProps)

Definition of EZ Aurora Cluster.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`databaseClusterProps`](#awscdkeziezauroraclusterpropspropertydatabaseclusterprops) | [`aws-cdk-lib.aws_rds.DatabaseClusterProps`](#aws-cdk-lib.aws_rds.DatabaseClusterProps) | Database cluster props, these will take precedence. |
| [`engine`](#awscdkeziezauroraclusterpropspropertyengine) | [`aws-cdk-lib.aws_rds.IClusterEngine`](#aws-cdk-lib.aws_rds.IClusterEngine) | Database engine to use. |
| [`instances`](#awscdkeziezauroraclusterpropspropertyinstances) | `number` | Number of database instances to deploy. |
| [`vpc`](#awscdkeziezauroraclusterpropspropertyvpc) | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | VPC to deploy into. |

---

##### `databaseClusterProps`<sup>Optional</sup> <a name="aws-cdk-ez.IEzAuroraClusterProps.property.databaseClusterProps" id="awscdkeziezauroraclusterpropspropertydatabaseclusterprops"></a>

```typescript
public readonly databaseClusterProps: DatabaseClusterProps;
```

- *Type:* [`aws-cdk-lib.aws_rds.DatabaseClusterProps`](#aws-cdk-lib.aws_rds.DatabaseClusterProps)
- *Default:* undefined

Database cluster props, these will take precedence.

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-ez.IEzAuroraClusterProps.property.engine" id="awscdkeziezauroraclusterpropspropertyengine"></a>

```typescript
public readonly engine: IClusterEngine;
```

- *Type:* [`aws-cdk-lib.aws_rds.IClusterEngine`](#aws-cdk-lib.aws_rds.IClusterEngine)
- *Default:* PostgreSQL 13.4

Database engine to use.

---

##### `instances`<sup>Optional</sup> <a name="aws-cdk-ez.IEzAuroraClusterProps.property.instances" id="awscdkeziezauroraclusterpropspropertyinstances"></a>

```typescript
public readonly instances: number;
```

- *Type:* `number`
- *Default:* 1

Number of database instances to deploy.

---

##### `vpc`<sup>Optional</sup> <a name="aws-cdk-ez.IEzAuroraClusterProps.property.vpc" id="awscdkeziezauroraclusterpropspropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)
- *Default:* undefined, if left undefined then a new VPC with private isolated subnets will be created.

VPC to deploy into.

---

### IEzAuroraGlobalClusterProps <a name="aws-cdk-ez.IEzAuroraGlobalClusterProps" id="awscdkeziezauroraglobalclusterprops"></a>

- *Extends:* [`aws-cdk-ez.IEzAuroraClusterProps`](#aws-cdk-ez.IEzAuroraClusterProps)

- *Implemented By:* [`aws-cdk-ez.IEzAuroraGlobalClusterProps`](#aws-cdk-ez.IEzAuroraGlobalClusterProps)

Definition of EZ Aurora Global Cluster.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`databaseClusterProps`](#awscdkeziezauroraglobalclusterpropspropertydatabaseclusterprops) | [`aws-cdk-lib.aws_rds.DatabaseClusterProps`](#aws-cdk-lib.aws_rds.DatabaseClusterProps) | Database cluster props, these will take precedence. |
| [`engine`](#awscdkeziezauroraglobalclusterpropspropertyengine) | [`aws-cdk-lib.aws_rds.IClusterEngine`](#aws-cdk-lib.aws_rds.IClusterEngine) | Database engine to use. |
| [`instances`](#awscdkeziezauroraglobalclusterpropspropertyinstances) | `number` | Number of database instances to deploy. |
| [`vpc`](#awscdkeziezauroraglobalclusterpropspropertyvpc) | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | VPC to deploy into. |
| [`globalClusterIdentifier`](#awscdkeziezauroraglobalclusterpropspropertyglobalclusteridentifier)<span title="Required">*</span> | `string` | Global Cluster Identifier. |
| [`isPrimary`](#awscdkeziezauroraglobalclusterpropspropertyisprimary) | `boolean` | Makes the cluster primary in the global cluster. |

---

##### `databaseClusterProps`<sup>Optional</sup> <a name="aws-cdk-ez.IEzAuroraGlobalClusterProps.property.databaseClusterProps" id="awscdkeziezauroraglobalclusterpropspropertydatabaseclusterprops"></a>

```typescript
public readonly databaseClusterProps: DatabaseClusterProps;
```

- *Type:* [`aws-cdk-lib.aws_rds.DatabaseClusterProps`](#aws-cdk-lib.aws_rds.DatabaseClusterProps)
- *Default:* undefined

Database cluster props, these will take precedence.

---

##### `engine`<sup>Optional</sup> <a name="aws-cdk-ez.IEzAuroraGlobalClusterProps.property.engine" id="awscdkeziezauroraglobalclusterpropspropertyengine"></a>

```typescript
public readonly engine: IClusterEngine;
```

- *Type:* [`aws-cdk-lib.aws_rds.IClusterEngine`](#aws-cdk-lib.aws_rds.IClusterEngine)
- *Default:* PostgreSQL 13.4

Database engine to use.

---

##### `instances`<sup>Optional</sup> <a name="aws-cdk-ez.IEzAuroraGlobalClusterProps.property.instances" id="awscdkeziezauroraglobalclusterpropspropertyinstances"></a>

```typescript
public readonly instances: number;
```

- *Type:* `number`
- *Default:* 1

Number of database instances to deploy.

---

##### `vpc`<sup>Optional</sup> <a name="aws-cdk-ez.IEzAuroraGlobalClusterProps.property.vpc" id="awscdkeziezauroraglobalclusterpropspropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)
- *Default:* undefined, if left undefined then a new VPC with private isolated subnets will be created.

VPC to deploy into.

---

##### `globalClusterIdentifier`<sup>Required</sup> <a name="aws-cdk-ez.IEzAuroraGlobalClusterProps.property.globalClusterIdentifier" id="awscdkeziezauroraglobalclusterpropspropertyglobalclusteridentifier"></a>

```typescript
public readonly globalClusterIdentifier: string;
```

- *Type:* `string`

Global Cluster Identifier.

Required.

---

##### `isPrimary`<sup>Optional</sup> <a name="aws-cdk-ez.IEzAuroraGlobalClusterProps.property.isPrimary" id="awscdkeziezauroraglobalclusterpropspropertyisprimary"></a>

```typescript
public readonly isPrimary: boolean;
```

- *Type:* `boolean`
- *Default:* undefined

Makes the cluster primary in the global cluster.

If not true, then the cluster attempts to join an existing global cluster.

---

### IEzEc2InstanceProps <a name="aws-cdk-ez.IEzEc2InstanceProps" id="awscdkeziezec2instanceprops"></a>

- *Implemented By:* [`aws-cdk-ez.IEzEc2InstanceProps`](#aws-cdk-ez.IEzEc2InstanceProps)

Definition of EZ EC2 Instance.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`instanceProps`](#awscdkeziezec2instancepropspropertyinstanceprops) | [`aws-cdk-lib.aws_ec2.InstanceProps`](#aws-cdk-lib.aws_ec2.InstanceProps) | Instance props for the native Instance object, these will take precedence. |
| [`instanceType`](#awscdkeziezec2instancepropspropertyinstancetype) | [`aws-cdk-lib.aws_ec2.InstanceType`](#aws-cdk-lib.aws_ec2.InstanceType) | Instance Type to deploy. |
| [`keyName`](#awscdkeziezec2instancepropspropertykeyname) | `string` | Name of RSA key to deploy instance with. |
| [`machineImage`](#awscdkeziezec2instancepropspropertymachineimage) | [`aws-cdk-lib.aws_ec2.IMachineImage`](#aws-cdk-lib.aws_ec2.IMachineImage) | Machine image to deploy. |
| [`publicKey`](#awscdkeziezec2instancepropspropertypublickey) | `string` | Public key to use. |
| [`vpc`](#awscdkeziezec2instancepropspropertyvpc) | [`aws-cdk-lib.aws_ec2.Vpc`](#aws-cdk-lib.aws_ec2.Vpc) | VPC to deploy into. |

---

##### `instanceProps`<sup>Optional</sup> <a name="aws-cdk-ez.IEzEc2InstanceProps.property.instanceProps" id="awscdkeziezec2instancepropspropertyinstanceprops"></a>

```typescript
public readonly instanceProps: InstanceProps;
```

- *Type:* [`aws-cdk-lib.aws_ec2.InstanceProps`](#aws-cdk-lib.aws_ec2.InstanceProps)
- *Default:* undefined

Instance props for the native Instance object, these will take precedence.

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-ez.IEzEc2InstanceProps.property.instanceType" id="awscdkeziezec2instancepropspropertyinstancetype"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* [`aws-cdk-lib.aws_ec2.InstanceType`](#aws-cdk-lib.aws_ec2.InstanceType)
- *Default:* 'T3.Micro'

Instance Type to deploy.

---

##### `keyName`<sup>Optional</sup> <a name="aws-cdk-ez.IEzEc2InstanceProps.property.keyName" id="awscdkeziezec2instancepropspropertykeyname"></a>

```typescript
public readonly keyName: string;
```

- *Type:* `string`
- *Default:* undefined

Name of RSA key to deploy instance with.

---

##### `machineImage`<sup>Optional</sup> <a name="aws-cdk-ez.IEzEc2InstanceProps.property.machineImage" id="awscdkeziezec2instancepropspropertymachineimage"></a>

```typescript
public readonly machineImage: IMachineImage;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IMachineImage`](#aws-cdk-lib.aws_ec2.IMachineImage)
- *Default:* Latest Amazon Linux 2

Machine image to deploy.

---

##### `publicKey`<sup>Optional</sup> <a name="aws-cdk-ez.IEzEc2InstanceProps.property.publicKey" id="awscdkeziezec2instancepropspropertypublickey"></a>

```typescript
public readonly publicKey: string;
```

- *Type:* `string`
- *Default:* undefined

Public key to use.

---

##### `vpc`<sup>Optional</sup> <a name="aws-cdk-ez.IEzEc2InstanceProps.property.vpc" id="awscdkeziezec2instancepropspropertyvpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.Vpc`](#aws-cdk-lib.aws_ec2.Vpc)
- *Default:* undefined, if left undefined then a new VPC with private NAT subnets will be created.

VPC to deploy into.

---

### IEzS3BucketProps <a name="aws-cdk-ez.IEzS3BucketProps" id="awscdkeziezs3bucketprops"></a>

- *Implemented By:* [`aws-cdk-ez.IEzS3BucketProps`](#aws-cdk-ez.IEzS3BucketProps)

Definition of S3 Bucket.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`bucketProps`](#awscdkeziezs3bucketpropspropertybucketprops) | [`aws-cdk-lib.aws_s3.BucketProps`](#aws-cdk-lib.aws_s3.BucketProps) | S3 Bucket props for the native Bucket object, these will take precedence. |
| [`deployKeyPrefix`](#awscdkeziezs3bucketpropspropertydeploykeyprefix) | `string` | Deployment prefix. |
| [`deploymentSource`](#awscdkeziezs3bucketpropspropertydeploymentsource) | `string` | Source content to deploy to the S3 Bucket. |
| [`enableWebDistribution`](#awscdkeziezs3bucketpropspropertyenablewebdistribution) | `boolean` | Deploy a CloudFront Web Distribution with the bucket as source. |

---

##### `bucketProps`<sup>Optional</sup> <a name="aws-cdk-ez.IEzS3BucketProps.property.bucketProps" id="awscdkeziezs3bucketpropspropertybucketprops"></a>

```typescript
public readonly bucketProps: BucketProps;
```

- *Type:* [`aws-cdk-lib.aws_s3.BucketProps`](#aws-cdk-lib.aws_s3.BucketProps)

S3 Bucket props for the native Bucket object, these will take precedence.

---

##### `deployKeyPrefix`<sup>Optional</sup> <a name="aws-cdk-ez.IEzS3BucketProps.property.deployKeyPrefix" id="awscdkeziezs3bucketpropspropertydeploykeyprefix"></a>

```typescript
public readonly deployKeyPrefix: string;
```

- *Type:* `string`
- *Default:* undefined

Deployment prefix.

Source content will be deployed with this key prefix, ie. 'web/static'

---

##### `deploymentSource`<sup>Optional</sup> <a name="aws-cdk-ez.IEzS3BucketProps.property.deploymentSource" id="awscdkeziezs3bucketpropspropertydeploymentsource"></a>

```typescript
public readonly deploymentSource: string;
```

- *Type:* `string`
- *Default:* undefined

Source content to deploy to the S3 Bucket.

This can be either a local .zip file, or a local directory. Ie. './src/file.zip'. Contents of a .zip will be extracted.

---

##### `enableWebDistribution`<sup>Optional</sup> <a name="aws-cdk-ez.IEzS3BucketProps.property.enableWebDistribution" id="awscdkeziezs3bucketpropspropertyenablewebdistribution"></a>

```typescript
public readonly enableWebDistribution: boolean;
```

- *Type:* `boolean`
- *Default:* undefined

Deploy a CloudFront Web Distribution with the bucket as source.

---

### IEzVpcProps <a name="aws-cdk-ez.IEzVpcProps" id="awscdkeziezvpcprops"></a>

- *Implemented By:* [`aws-cdk-ez.IEzVpcProps`](#aws-cdk-ez.IEzVpcProps)

Definition of EZ VPC.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`enableFlowLog`](#awscdkeziezvpcpropspropertyenableflowlog) | `boolean` | Whether to enable VPC Flow Logs. |
| [`enableSsmEndpoint`](#awscdkeziezvpcpropspropertyenablessmendpoint) | `boolean` | Whether to create interface endpoints required for SSM to function in an isolated subnet. |
| [`enableSubnetPrivateIsolated`](#awscdkeziezvpcpropspropertyenablesubnetprivateisolated) | `boolean` | Whether to create private isolated subnets. |
| [`enableSubnetPrivateNat`](#awscdkeziezvpcpropspropertyenablesubnetprivatenat) | `boolean` | Whether to create private NAT subnets. |
| [`enableSubnetPublic`](#awscdkeziezvpcpropspropertyenablesubnetpublic) | `boolean` | Whether to create a public subnet. |
| [`vpcProps`](#awscdkeziezvpcpropspropertyvpcprops) | [`aws-cdk-lib.aws_ec2.VpcProps`](#aws-cdk-lib.aws_ec2.VpcProps) | VPC props for the native VPC object, these will take precendence over any other props. |

---

##### `enableFlowLog`<sup>Optional</sup> <a name="aws-cdk-ez.IEzVpcProps.property.enableFlowLog" id="awscdkeziezvpcpropspropertyenableflowlog"></a>

```typescript
public readonly enableFlowLog: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether to enable VPC Flow Logs.

---

##### `enableSsmEndpoint`<sup>Optional</sup> <a name="aws-cdk-ez.IEzVpcProps.property.enableSsmEndpoint" id="awscdkeziezvpcpropspropertyenablessmendpoint"></a>

```typescript
public readonly enableSsmEndpoint: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether to create interface endpoints required for SSM to function in an isolated subnet.

---

##### `enableSubnetPrivateIsolated`<sup>Optional</sup> <a name="aws-cdk-ez.IEzVpcProps.property.enableSubnetPrivateIsolated" id="awscdkeziezvpcpropspropertyenablesubnetprivateisolated"></a>

```typescript
public readonly enableSubnetPrivateIsolated: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether to create private isolated subnets.

---

##### `enableSubnetPrivateNat`<sup>Optional</sup> <a name="aws-cdk-ez.IEzVpcProps.property.enableSubnetPrivateNat" id="awscdkeziezvpcpropspropertyenablesubnetprivatenat"></a>

```typescript
public readonly enableSubnetPrivateNat: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether to create private NAT subnets.

If true, then public subnets will also be created, with a NAT Gateway per AZ

---

##### `enableSubnetPublic`<sup>Optional</sup> <a name="aws-cdk-ez.IEzVpcProps.property.enableSubnetPublic" id="awscdkeziezvpcpropspropertyenablesubnetpublic"></a>

```typescript
public readonly enableSubnetPublic: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether to create a public subnet.

If true, then an Internet Gateway will be created

---

##### `vpcProps`<sup>Optional</sup> <a name="aws-cdk-ez.IEzVpcProps.property.vpcProps" id="awscdkeziezvpcpropspropertyvpcprops"></a>

```typescript
public readonly vpcProps: VpcProps;
```

- *Type:* [`aws-cdk-lib.aws_ec2.VpcProps`](#aws-cdk-lib.aws_ec2.VpcProps)
- *Default:* undefined

VPC props for the native VPC object, these will take precendence over any other props.

---

