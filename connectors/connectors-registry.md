# Connectors Registry

### Address

Connectors Registry is deployed on [mainnet](https://bscscan.com/address/0x944930F20A6D9f17140B6F5ba69F83BFF95eb820).

### Code

[connectors.sol](https://github.com/Open-Currency-Collective/nubian-dsa-contracts/blob/master/contracts/v2/registry/connectors.sol)

### Events

#### LogConnectorAdded

```text
event LogConnectorAdded(string indexed connectorName, address indexed connector);
```

Emitted anytime a new connector is added.

#### LogConnectorUpdated

```text
event LogConnectorUpdated(string indexed connectorName, address indexed oldConnector, address indexed newConnector);
```

Emitted anytime an existing connector is updated.

#### LogConnectorRemoved

```text
event LogConnectorRemoved(string indexed connectorName, address indexed connector);
```

Emitted when an existing connector is removed.

```text
event LogController(address indexed addr, bool indexed isChief);
```

Emitted when a chief is enabled or disabled \(toggled\).

### Read-only Methods

#### NbnIndex

```text
address public immutable nbnIndex;
```

Returns the address of NbnIndex.

#### Chief

```text
mapping(address => bool) public chief;
```

Returns a boolean indicating whether an address is a chief or not. A chief can add, remove, and update connectors.

#### Connectors

```text
mapping(string => address) public connectors;
```

Maps connector names to their addresses and returns an address when given a connector name.

### State-Changing Methods

#### ToggleChief

```text
function toggleChief(address _chiefAddress) external
```

Makes an address a chief if it isn't and vice versa.

**Parameters**

| Parameter | Type | Description |
| :--- | :--- | :--- |
| \_chiefAddress | `address` | The old/new chief address. |

#### AddConnectors

```text
function addConnectors(string[] calldata _connectorNames, address[] calldata _connectors) external isChief
```

Adds new connectors.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| \_connectorNames | `string[]` | Array of connector names |
| \_connectors | `address[]` | Array of corresponding connector addresses to _\_connectorNames_ |

#### RemoveConnectors

```text
function removeConnectors(string[] calldata _connectorNames) external isChief
```

Removes an already existing connector.

**Parameter**

| Parameter | Type | Description |
| :--- | :--- | :--- |
| \_connectorNames | `string[]` | Array of connector names |

#### UpdateConnectors

```text
function updateConnectors(string[] calldata _connectorNames, address[] calldata _connectors) external isChief
```

Updates an already existing connector.

**Parameter**

| Parameter | Type | Description |
| :--- | :--- | :--- |
| \_connectorNames | `string[]` | Array of connector names |
| \_connectors | `address[]` | Array of connector names |

#### IsConnectors

```text
function isConnectors(string[] calldata _connectorNames) external view returns (bool isOk, address[] memory _connectors)
```

Checks if _\_connectorNames_ are connectors and returns their connector addresses.

**Parameter**

| Parameter | Type | Description |
| :--- | :--- | :--- |
| \_connectorNames | `string[]` | Array of connector names |

**Returns**

| Parameter | Type | Description |
| :--- | :--- | :--- |
| isOk | `boolean` | Is true if all _\_connectorNames_ are valid and false otherwise |
| \_connectors | `address[]` | Addresses of _\_connectorNames_ . False connectors have a null address. |

