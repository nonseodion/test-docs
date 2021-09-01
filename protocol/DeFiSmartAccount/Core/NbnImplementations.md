# NbnImplementations

This contract manages the account extensions. It is used to store, add, and removes extensions.

## Address

NbnImplementations is deployed on [mainnet](https://bscscan.com/address/0x27361FF365FF51c2bc97dbEd89A6cd7Bac4c710c).

## Code

[implementations.sol](https://github.com/Open-Currency-Collective/nubian-dsa-contracts/blob/master/contracts/v2/registry/implementations.sol)

## Events

```solidity
event LogSetDefaultImplementation(address indexed oldImplementation, address indexed newImplementation);
```

Setting a new default implementation emits this event.

### Parameter

```solidity
event LogAddImplementation(address indexed implementation, bytes4[] sigs);
```

This event is emitted when an implementation is added.

### Parameter

```solidity
event LogRemoveImplementation(address indexed implementation, bytes4[] sigs);
```

This event is emitted when an implementation is removed.

## Read-only methods

### DefaultImplementation

```solidity
address public defaultImplementation;
```

Returns the address of the default account extension.

### GetImplementation

```solidity
function getImplementation(bytes4 _sig) external view returns (address);
```

#### Parameter

| Parameter | Type | Description
| --- | --- | --- |
| _sig | `bytes4` | Signature of the function whose implementation contract is being requested. |

Returns the address of an account extension that implements _sig or the default implementation if no account extension implements it.

### GetImplementationSigs

```solidity
function getImplementationSigs(address _impl) external view returns (bytes4[] memory);
```

Returns all the function signatures of an account extension.

#### Parameter

| Parameter | Type | Description
| --- | --- | --- |
| _impl | `address` | ignature of the function whose implementation contract is being requested. |

### GetSigImplementation

```solidity
function getSigImplementation(bytes4 _sig) external view returns (address) {
    return sigImplementations[_sig];
}
```

Returns the address of an account extension that implements _sig.

| Parameter | Type | Description
| --- | --- | --- |
| _sig | `bytes4` | Signature of the function called. |

## State-changing methods

### SetDefaultImplementation

```solidity
function setDefaultImplementation(address _defaultImplementation) external isMaster
```

Sets the default account extension which implements the most basic functionalities of the DeFi Smart Account (DSA) such as adding and removing authorities.

#### Parameter

| Parameter | Type | Description
| --- | --- | --- |
| _defaultImplementation | `address` | Address of new default account extension. |

### AddImplementation

```solidity
function addImplementation(address _implementation, bytes4[] calldata _sigs) external isMaster;
```

Adds a new account extension to the DSA.

#### Parameter

| Parameter | Type | Description
| --- | --- | --- |
| _implementation | `address` | The address of the new implementation. |
| _sigs | `bytes4[]` | An array of all the needed function signatures of _implementation. |

### RemoveImplementation

```solidity
function removeImplementation(address _implementation) external isMaster;
```

Removes an extension from the DSA.

#### Paramater

| Parameter | Type | Description
| --- | --- | --- |
| _implementation | `address` | The address of the implementation to be removed. |
