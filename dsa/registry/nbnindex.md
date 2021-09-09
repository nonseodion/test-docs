# NbnIndex

It deploys new DSA contracts and stores a master address that governs the whole Nubian ecosystem. The master address can add new connectors and extensions. It stores the available account modules or versions.

## Address

NbnIndex is deployed on [mainnet](https://bscscan.com/address/0xfDE04Da1560c238EDBC07Df1779A8593C39103Bc).

## Code

[index.sol](https://github.com/Open-Currency-Collective/nubian-dsa-contracts/blob/master/contracts/registry/index.sol)

## Events

### LogNewMaster

```text
  event LogNewMaster(address indexed master);
```

Emitted when master address is changed with changeMaster.

### LogUpdateMaster

```text
event LogUpdateMaster(address indexed master);
```

Emitted when master address is updated with updateMaster.

### LogNewCheck

```text
event LogNewCheck(uint indexed accountVersion, address indexed check);
```

Emitted when a new check is added for an account's version.

### LogNewAccount

```text
event LogNewAccount(address indexed _newAccount, address indexed _connectors, address indexed _check);
```

Emitted when a new account module is added.

### LogAccountCreated

```text
event LogAccountCreated(address sender, address indexed owner, address indexed account, address indexed origin);
```

Emitted when a new Account is created.

## Read-only methods

### NewMaster

```text
address private newMaster;
```

Returns the address of a newMaster. newMaster is set when changeMaster is called and is set to a null address when updateMaster is called. This requires the newMaster to explicitly call the contract to assume control.

### Master

```text
address public master;
```

Returns the address of the master contract.

### List

```text
address public list;
```

Returns the address of NbnList.

### Connectors

```text
mapping (uint => address) public connectors;
```

Returns the address holding the DSA version's connector registry.

#### Parameter

| Type | Description |
| :--- | :--- |
| `uint` | The DSA version. |

### Check

```text
mapping (uint => address) public check;
```

Returns the check for a DSA version.

#### Parameter

| Type | Description |
| :--- | :--- |
| `uint` | The DSA version. |

### Account

```text
mapping (uint => address) public account;
```

Returns the address of a DSA version. The contract at this address is used to produce clones of itself.

#### Parameter

| Type | Description |
| :--- | :--- |
| `uint` | The DSA version. |

### VersionCount

```text
uint public versionCount;
```

Returns the number of DSA versions available.

### CreateClone

```text
  function createClone(uint version) internal returns (address result)
```

Creates a clone of version.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| version | `uint` | Creates a clone of version _version_ of the account modules. |

### IsClone

```text
function isClone(uint version, address query) external view returns (bool result)
```

Checks if account at _query_ is a clone of _version_.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| version | `uint` | An account version to check against. |
| query | `address` | Address of the account. |

## State-changing Methods

### ChangeMaster

```text
function changeMaster(address _newMaster) external isMaster {
```

This assigns \_newMaster to the newMaster state variable. It does not immediately make \_newMaster the master but requires it to explicility take control by itself by calling updateMaster.

#### Parameter

| Parameter | Type | Description |
| :--- | :--- | :--- |
| \_newMaster | `address` | The new Master. |

### UpdateMaster

```text
function updateMaster() external
```

This is called by newMaster to make itself the new master.

### ChangeCheck

```text
function changeCheck(uint accountVersion, address _newCheck) external isMaster;
```

Changes the check address of a specific account Module version.

#### Parameter

| Parameter | Type | Description |
| :--- | :--- | :--- |
| \_accountVersion | `uint` | Account module version. |
| \_newCheck | `address` | The new check address. |

### AddNewAccount

```text
function addNewAccount(address _newAccount, address _connectors, address _check) external isMaster
```

Adds a new account module version.

#### Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| \_newAccount | `address` | The new address of the new account module. |
| \_newCheck | `address` | The new check address. |

### Build <a id="Build"></a>

```text
function build(
    address _owner,
    uint accountVersion,
    address _origin
) public returns (address _account);
```

Creates a new DSA of version _accountVersion_ with _\_owner_ as the owner.

#### Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| \_owner | `address` | Owner of the new DSA. |
| accountVersion | `uint` | The version of the new DSA. |
| \_origin | `address` | The address to track the origin of transaction. Used for analytics and affiliates.. |

### BuildWithCast

```text
function buildWithCast(
        address _owner,
        uint accountVersion,
        address[] calldata _targets,
        bytes[] calldata _datas,
        address _origin
    ) external payable returns (address _account)
```

Creates a new DSA and cast spells.

#### Parameters

Check Build for the other parameters.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| \_targets | `address[]` | Addresses of connectors to be called in spell. |
| \_datas | `bytes[]` | Data to be passed to corressponding connectors in  _\_targets_ array. |

### SetBasics

```text
function setBasics(
    address _master,
    address _list,
    address _account,
    address _connectors
) external ;
```

Sets up initial properties of the contract and can only be called once after the contract is deployed.

#### Parameters

| Parameter | Type | Description |
| :--- | :--- | :--- |
| \_master | `address` | The master address. |
| \_list | `address` | The NbnList address. |
| \_account | `address` | The address of DSA version 1. |
| \_connectors | `address` | The connectors registry. Manages the available connectors. |

