# NbnIndex

It deploys new DSA contracts and stores a master address that governs the whole Nubian ecosystem. The master address can add new connectors and extensions. It stores the available account modules or versions.

## Address

NbnIndex is deployed on [mainnet](https://bscscan.com/address/0xfDE04Da1560c238EDBC07Df1779A8593C39103Bc).

## Code

[index.sol](https://github.com/Open-Currency-Collective/nubian-dsa-contracts/blob/master/contracts/registry/index.sol)

## Events

### LogNewMaster

```solidity
  event LogNewMaster(address indexed master);
```

Emitted when master address is changed with changeMaster.

### LogUpdateMaster

```solidity
event LogUpdateMaster(address indexed master);
```

Emitted when master address is updated with updateMaster.

### LogNewCheck

```solidity
event LogNewCheck(uint indexed accountVersion, address indexed check);
```

Emitted when a new check is added for an account's version.

### LogNewAccount

```solidity
event LogNewAccount(address indexed _newAccount, address indexed _connectors, address indexed _check);
```

Emitted when a new account module is added.

## Read-only methods

### NewMaster

```solidity
address private newMaster;
```

Returns the address of a newMaster. newMaster is set when changeMaster is called and is set to a null address when updateMaster is called. This requires the newMaster to explicitly call the contract to assume control.

### Master

```solidity
address public master;
```

Returns the address of the master contract.

### List

```solidity
address public list;
```

Returns the address of NbnList.

### Connectors

```solidity
mapping (uint => address) public connectors;
```

Returns the address holding the DSA version's connector registry.

#### Parameter

| Type | Description
| --- | --- |
| `uint` | The DSA version. |

### Check

```solidity
mapping (uint => address) public check;
```

Returns the check for a DSA version.

#### Parameter

| Type | Description
| --- | --- |
| `uint` | The DSA version. |

### Account

```solidity
mapping (uint => address) public account;
```

Returns the address of a DSA version. The contract at this address is used to produce clones of itself.

#### Parameter

| Type | Description |
| --- | --- |
| `uint` | The DSA version. |

### VersionCount

```solidity
uint public versionCount;
```

Returns the number of DSA versions available.

## State-changing Methods

### ChangeMaster

```solidity
function changeMaster(address _newMaster) external isMaster {
```

This assigns \_newMaster to the newMaster state variable. It does not immediately make \_newMaster the master but requires it to explicility take control by itself by calling updateMaster.

#### Parameter

| Parameter | Type | Description
| --- | --- | --- |
| _newMaster | `address` | The new Master. |

### UpdateMaster

```solidity
function updateMaster() external
```

This is called by newMaster to make itself the new master.
