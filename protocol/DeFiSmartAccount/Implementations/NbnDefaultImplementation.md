# NbnDefaultImplementation

Used to add and remove authorities, owners of a DeFi Smart Account (DSA). It is called to add the new owner when a DSA is created.

## Address

Autofarm connector is deployed on [mainnet](https://bscscan.com/address/0xc9Fc01064Ad33ACaa4534dA4604Fd6602CEF873d).

## Code

[implementation_default.sol](https://github.com/Open-Currency-Collective/nubian-dsa-contracts/blob/master/contracts/v2/accounts/implementation_default.sol)

## Events

### LogEnableUser

```solidity
event LogEnableUser(address indexed user);
```

Emitted when a new authority is added to a DSA.

### LogDisableUser

```solidity
event LogDisableUser(address indexed user);
```

Emitted when an authority is removed.

## Read-only methods

### ImplementationVersion

```solidity
uint public constant implementationVersion = 1;
```

Returns the implementation version.

### NbnIndex

```solidity
address public immutable nbnIndex;
```

Returns the address of the nbnIndex. nbnIndex is used to create DSAs and assigns the first owner in this owner.

### Version

```solidity
uint public constant version = 2;
```

Returns the version of the DSA contract.

### isAuth

```solidity
function isAuth(address user) public view returns (bool);
```

Used to check if user has control over a DSA. It returns a boolean value, true if it is an authority false otherwise.

#### Parameters

| Parameter | Type | Description
| --- | --- | --- |
| user | `address` | The address to be checked. |

## State-changing methods

### enable

```solidity
function enable(address user) public;
```

Adds an address as a new authority. user must not already be an authority else the transaction reverts. This gives user complete control over a DSA.

#### Parameters

| Parameter | Type | Description
| --- | --- | --- |
| user | `address` | The new authority. |

### disable

```solidity
function disable(address user) public;
```

Removes an address from the authorities of a DSA. The address must already be an authority, or else the transaction is reverted. This removes all rights over a DSA from user.

#### Parameters

| Parameter | Type | Description
| --- | --- | --- |
| user | `address` | The authority to remove. |
