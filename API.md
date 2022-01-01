# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### EzEc2Instance <a name="aws-cdk-ez.EzEc2Instance" id="awscdkezezec2instance"></a>

An EZ EC2 Instance.

If no props are provided, then a VPC is created

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

---

##### `instance`<sup>Required</sup> <a name="aws-cdk-ez.EzEc2Instance.property.instance" id="awscdkezezec2instancepropertyinstance"></a>

```typescript
public readonly instance: Instance;
```

- *Type:* [`aws-cdk-lib.aws_ec2.Instance`](#aws-cdk-lib.aws_ec2.Instance)

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


### EzVpc <a name="aws-cdk-ez.EzVpc" id="awscdkezezvpc"></a>

An EZ VPC.

If no props are provided, or no subnet creation specified, then a VPC with isolated subnets is created.

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

### IEzEc2InstanceProps <a name="aws-cdk-ez.IEzEc2InstanceProps" id="awscdkeziezec2instanceprops"></a>

- *Implemented By:* [`aws-cdk-ez.IEzEc2InstanceProps`](#aws-cdk-ez.IEzEc2InstanceProps)

Definition of EZ EC2 Instance.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`instanceType`](#awscdkeziezec2instancepropspropertyinstancetype) | [`aws-cdk-lib.aws_ec2.InstanceType`](#aws-cdk-lib.aws_ec2.InstanceType) | Instance type to deploy. |
| [`keyName`](#awscdkeziezec2instancepropspropertykeyname) | `string` | RSA Key Name to associate with the EC2 instance. |
| [`machineImage`](#awscdkeziezec2instancepropspropertymachineimage) | [`aws-cdk-lib.aws_ec2.IMachineImage`](#aws-cdk-lib.aws_ec2.IMachineImage) | Machine image to deploy. |
| [`role`](#awscdkeziezec2instancepropspropertyrole) | [`aws-cdk-lib.aws_iam.Role`](#aws-cdk-lib.aws_iam.Role) | The IAM Role to associate with the EC2 instance. |
| [`vpc`](#awscdkeziezec2instancepropspropertyvpc) | [`aws-cdk-lib.aws_ec2.Vpc`](#aws-cdk-lib.aws_ec2.Vpc) | VPC to deploy instance into. |

---

##### `instanceType`<sup>Optional</sup> <a name="aws-cdk-ez.IEzEc2InstanceProps.property.instanceType" id="awscdkeziezec2instancepropspropertyinstancetype"></a>

```typescript
public readonly instanceType: InstanceType;
```

- *Type:* [`aws-cdk-lib.aws_ec2.InstanceType`](#aws-cdk-lib.aws_ec2.InstanceType)
- *Default:* t3.micro

Instance type to deploy.

---

##### `keyName`<sup>Optional</sup> <a name="aws-cdk-ez.IEzEc2InstanceProps.property.keyName" id="awscdkeziezec2instancepropspropertykeyname"></a>

```typescript
public readonly keyName: string;
```

- *Type:* `string`
- *Default:* undefined

RSA Key Name to associate with the EC2 instance.

---

##### `machineImage`<sup>Optional</sup> <a name="aws-cdk-ez.IEzEc2InstanceProps.property.machineImage" id="awscdkeziezec2instancepropspropertymachineimage"></a>

```typescript
public readonly machineImage: IMachineImage;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IMachineImage`](#aws-cdk-lib.aws_ec2.IMachineImage)
- *Default:* Amazon Linux 2

Machine image to deploy.

---

##### `role`<sup>Optional</sup> <a name="aws-cdk-ez.IEzEc2InstanceProps.property.role" id="awscdkeziezec2instancepropspropertyrole"></a>

```typescript
public readonly role: Role;
```

- *Type:* [`aws-cdk-lib.aws_iam.Role`](#aws-cdk-lib.aws_iam.Role)
- *Default:* Create a new IAM Role with SSM management permissions

The IAM Role to associate with the EC2 instance.

---

##### `vpc`<sup>Optional</sup> <a name="aws-cdk-ez.IEzEc2InstanceProps.property.vpc" id="awscdkeziezec2instancepropspropertyvpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.Vpc`](#aws-cdk-lib.aws_ec2.Vpc)
- *Default:* Create a VPC with private isolated subnets

VPC to deploy instance into.

---

### IEzVpcProps <a name="aws-cdk-ez.IEzVpcProps" id="awscdkeziezvpcprops"></a>

- *Implemented By:* [`aws-cdk-ez.IEzVpcProps`](#aws-cdk-ez.IEzVpcProps)

Definition of EZ VPC.


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`cidr`](#awscdkeziezvpcpropspropertycidr) | `string` | The CIDR to use for the VPC. |
| [`cidrMask`](#awscdkeziezvpcpropspropertycidrmask) | `number` | The CIDR mask to use for subnets in the VPC. |
| [`enableFlowLog`](#awscdkeziezvpcpropspropertyenableflowlog) | `boolean` | Whether to enable VPC Flow Logs. |
| [`enableSsmEndpoint`](#awscdkeziezvpcpropspropertyenablessmendpoint) | `boolean` | Whether to create interface endpoints required for SSM to function in an isolated subnet. |
| [`enableSubnetPrivateIsolated`](#awscdkeziezvpcpropspropertyenablesubnetprivateisolated) | `boolean` | Whether to create private isolated subnets. |
| [`enableSubnetPrivateNat`](#awscdkeziezvpcpropspropertyenablesubnetprivatenat) | `boolean` | Whether to create private NAT subnets. |
| [`enableSubnetPublic`](#awscdkeziezvpcpropspropertyenablesubnetpublic) | `boolean` | Whether to create a public subnet. |
| [`maxAzs`](#awscdkeziezvpcpropspropertymaxazs) | `number` | The maximum number of Availability Zones to use for the VPC. |

---

##### `cidr`<sup>Optional</sup> <a name="aws-cdk-ez.IEzVpcProps.property.cidr" id="awscdkeziezvpcpropspropertycidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* `string`
- *Default:* '10.0.0.0/16'

The CIDR to use for the VPC.

---

##### `cidrMask`<sup>Optional</sup> <a name="aws-cdk-ez.IEzVpcProps.property.cidrMask" id="awscdkeziezvpcpropspropertycidrmask"></a>

```typescript
public readonly cidrMask: number;
```

- *Type:* `number`
- *Default:* 28

The CIDR mask to use for subnets in the VPC.

The same mask is used for all subnets

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

##### `maxAzs`<sup>Optional</sup> <a name="aws-cdk-ez.IEzVpcProps.property.maxAzs" id="awscdkeziezvpcpropspropertymaxazs"></a>

```typescript
public readonly maxAzs: number;
```

- *Type:* `number`
- *Default:* 2

The maximum number of Availability Zones to use for the VPC.

---

