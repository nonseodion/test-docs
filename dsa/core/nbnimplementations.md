# NbnImplementations

This contract manages the account extensions. It is used to store, add, and removes extensions.

## Address

NbnImplementations is deployed on [mainnet](https://bscscan.com/address/0x27361FF365FF51c2bc97dbEd89A6cd7Bac4c710c).

## Code

[implementations.sol](https://github.com/Open-Currency-Collective/nubian-dsa-contracts/blob/master/contracts/v2/registry/implementations.sol)

## Events

### LogSetDefaultImplementation

```text
event LogSetDefaultImplementation(address indexed oldImplementation, address indexed newImplementation);
```

Setting a new default implementation emits this event.

### LogAddImplementation

```text
event LogAddImplementation(address indexed implementation, bytes4[] sigs);
```

This event is emitted when an implementation is added.

### LogRemoveImplementation

```text
event LogRemoveImplementation(address indexed implementation, bytes4[] sigs);
```

This event is emitted when an implementation is removed.

## Read-only methods

### DefaultImplementation

```text
address public defaultImplementation;
```

Returns the address of the default account extension.

### GetImplementation

```text
function getImplementation(bytes4 _sig) external view returns (address);
```

Returns the address of an account extension that has a function with it's function signature as \_sig or the default implementation if no account extension implements it.

#### Parameter

| Parameter | Type | Description |
| :--- | :--- | :--- |
| \_sig | `bytes4` | Signature of the function. |

### GetImplementationSigs

```text
function getImplementationSigs(address _impl) external view returns (bytes4[] memory);
```

Returns all the function signatures of \_impl.

#### Parameter

| Parameter | Type | Description |
| :--- | :--- | :--- |
| \_impl | `address` | Address of the extension. |

### GetSigImplementation

```text
function getSigImplementation(bytes4 _sig) external view returns (address);
```

Returns the address of an account extension that has a function with it's function signature as \_sig or the null address if no extension has it.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| \_sig | `bytes4` | Signature of the function called. |

## State-changing methods

### SetDefaultImplementation

```text
function setDefaultImplementation(address _defaultImplementation) external isMaster;
```

Sets the default account extension which implements the most basic functionalities of the DeFi Smart Account \(DSA\) such as adding and removing authorities. It can only be called by the Master account, which is the account that controls nbnIndex.

#### Parameter

| Parameter | Type | Description |
| :--- | :--- | :--- |
| \_defaultImplementation | `address` | Address of new default account extension. |

### AddImplementation

```text
function addImplementation(address _implementation, bytes4[] calldata _sigs) external isMaster;
```

Adds a new account extension to the DSA.

#### Parameter

| Parameter | Type | Description |
| :--- | :--- | :--- |
| \_implementation | `address` | The address of the new implementation. |
| \_sigs | `bytes4[]` | An array of all the needed function signatures of \_implementation. |

### RemoveImplementation

```text
function removeImplementation(address _implementation) external isMaster;
```

Removes an extension from the DSA.

#### Paramater

| Parameter | Type | Description |
| :--- | :--- | :--- |
| \_implementation | `address` | The address of the implementation to be removed. |

