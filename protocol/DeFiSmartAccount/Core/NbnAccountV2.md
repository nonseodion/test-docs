# NbnAccountV2

This is the main DSA contract. It is a proxy contract that routes function calls to an extension using a fallback function.

## Address

Autofarm connector is deployed on [mainnet](https://bscscan.com/address/0xa3999374b7669F07312F37AEd7E6328bFBE7Dd5c).

## Code

[accountProxy.sol](https://github.com/Open-Currency-Collective/nubian-dsa-contracts/blob/master/contracts/v2/proxy/accountProxy.sol)

## Events

NbnAccountV2 does not emit any event.

## Read-only methods

### Implementations

```solidity
AccountImplementations public immutable implementations;
```

It returns the address of the implementations contract.

## State-changing methods

### Delegate

```sol
function _delegate(address implementation) internal
```

It delegates a function call to the implementation (account extension). It uses assembly for the delegation and returns data to the external caller.

#### Parameter

| Parameter | Type | Description
| --- | --- | --- |
| implementation | `address` | The address of the contract which implements the function called. |

### _Fallback{#_Fallback}

```sol
  function _fallback(bytes4 _sig) internal
```

Retrieves the address of the extension which implements the function with function signature, _sig from the implementations contract.

#### Parameter

| Parameter | Type | Description
| --- | --- | --- |
| _sig | `bytes4` | Signature of the function called. |

### Fallback{#Fallback}

```solidity
fallback () external payable
```

Fallback function that passes the function signature, `msg.sig` to [_Fallback](#_Fallback) to delegate the call.

### Receive

```solidity
receive () external payable
```

Fallback function that calls [Fallback](#Fallback) if a function is called on the DSA.
