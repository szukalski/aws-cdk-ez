# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### EzVpc <a name="aws-cdk-ez.EzVpc" id="awscdkezezvpc"></a>

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

### IEzVpcProps <a name="aws-cdk-ez.IEzVpcProps" id="awscdkeziezvpcprops"></a>

- *Implemented By:* [`aws-cdk-ez.IEzVpcProps`](#aws-cdk-ez.IEzVpcProps)


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`cidr`](#awscdkeziezvpcpropspropertycidr) | `string` | *No description.* |
| [`cidrMask`](#awscdkeziezvpcpropspropertycidrmask) | `number` | *No description.* |
| [`enableFlowLog`](#awscdkeziezvpcpropspropertyenableflowlog) | `boolean` | *No description.* |
| [`enableSsmEndpoint`](#awscdkeziezvpcpropspropertyenablessmendpoint) | `boolean` | *No description.* |
| [`enableSubnetPrivateIsolated`](#awscdkeziezvpcpropspropertyenablesubnetprivateisolated) | `boolean` | *No description.* |
| [`enableSubnetPrivateNat`](#awscdkeziezvpcpropspropertyenablesubnetprivatenat) | `boolean` | *No description.* |
| [`enableSubnetPublic`](#awscdkeziezvpcpropspropertyenablesubnetpublic) | `boolean` | *No description.* |
| [`maxAzs`](#awscdkeziezvpcpropspropertymaxazs) | `number` | *No description.* |

---

##### `cidr`<sup>Optional</sup> <a name="aws-cdk-ez.IEzVpcProps.property.cidr" id="awscdkeziezvpcpropspropertycidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* `string`

---

##### `cidrMask`<sup>Optional</sup> <a name="aws-cdk-ez.IEzVpcProps.property.cidrMask" id="awscdkeziezvpcpropspropertycidrmask"></a>

```typescript
public readonly cidrMask: number;
```

- *Type:* `number`

---

##### `enableFlowLog`<sup>Optional</sup> <a name="aws-cdk-ez.IEzVpcProps.property.enableFlowLog" id="awscdkeziezvpcpropspropertyenableflowlog"></a>

```typescript
public readonly enableFlowLog: boolean;
```

- *Type:* `boolean`

---

##### `enableSsmEndpoint`<sup>Optional</sup> <a name="aws-cdk-ez.IEzVpcProps.property.enableSsmEndpoint" id="awscdkeziezvpcpropspropertyenablessmendpoint"></a>

```typescript
public readonly enableSsmEndpoint: boolean;
```

- *Type:* `boolean`

---

##### `enableSubnetPrivateIsolated`<sup>Optional</sup> <a name="aws-cdk-ez.IEzVpcProps.property.enableSubnetPrivateIsolated" id="awscdkeziezvpcpropspropertyenablesubnetprivateisolated"></a>

```typescript
public readonly enableSubnetPrivateIsolated: boolean;
```

- *Type:* `boolean`

---

##### `enableSubnetPrivateNat`<sup>Optional</sup> <a name="aws-cdk-ez.IEzVpcProps.property.enableSubnetPrivateNat" id="awscdkeziezvpcpropspropertyenablesubnetprivatenat"></a>

```typescript
public readonly enableSubnetPrivateNat: boolean;
```

- *Type:* `boolean`

---

##### `enableSubnetPublic`<sup>Optional</sup> <a name="aws-cdk-ez.IEzVpcProps.property.enableSubnetPublic" id="awscdkeziezvpcpropspropertyenablesubnetpublic"></a>

```typescript
public readonly enableSubnetPublic: boolean;
```

- *Type:* `boolean`

---

##### `maxAzs`<sup>Optional</sup> <a name="aws-cdk-ez.IEzVpcProps.property.maxAzs" id="awscdkeziezvpcpropspropertymaxazs"></a>

```typescript
public readonly maxAzs: number;
```

- *Type:* `number`

---

