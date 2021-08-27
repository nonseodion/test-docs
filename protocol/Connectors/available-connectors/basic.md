# Basic Connector

Basic handles user deposits and withdrawals on the DeFi Smart Account (DSA).

## Address

Basic Connector is deployed at 0xC2e1c0fc0A2c0126AD5222D6eB2453c6aEc1e637 on mainnet.

## Code

[main.sol](https://github.com/Open-Currency-Collective/Nubian-dsa-connectors/blob/master/contracts/connectors/basic/main.sol)

## Events

<!-- Check [connectors.md](../events.md) to know how to listen for events emitted. -->

### LogDeposit

```sol
    event LogDeposit(address indexed erc20, uint256 tokenAmt, uint256 getId, uint256 setId);
```

Emitted when there is a deposit with [Deposit](#Deposit).

### LogWithdraw

```sol
    event LogWithdraw(address indexed erc20, uint256 tokenAmt, address indexed to, uint256 getId uint256 setId);
```

Emitted when there is a withdrawal with [Withdraw](#Withdraw).

## Methods

### Read-only methods.

#### Name

```sol
string constant public name = "Basic-v1";
```

Returns connector name.

#### Deposit {#Deposit}

```solidity
    function deposit(
        address token,
        uint256 amt,
        uint256 getId,
        uint256 setId
    ) public payable returns (string memory _eventName, bytes memory _eventParam);
```

Deposits into DSA
  
##### Deposit Parameters

| Parameter  | Type  | Description  |
|---|---|---|
| token  | `address`  | Address of token to be deposited. Use `0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE` for BNB.  |
| amt  | `uint256`  | Amount of tokens to be deposited. Pass `uint(-1)` to deposit full depositor balance. `amt` must equal `msg.value` for ETH deposits.  |
| getId  | `uint256`  | ID to get `amt`. Pass 0 if unsure of its value.  |
| setId  | `uint256`  | ID to set amount deposited. Pass 0 if unsure of its value. |

#### Withdraw {#Withdraw}

```solidity
    function withdraw(
        address token,
        uint amt,
        address payable to,
        uint getId,
        uint setId
    ) public payable returns (string memory _eventName, bytes memory _eventParam);
```

Withdraws from DSA.

##### Withdraw Parameters

| Parameter  | Type  | Description  |
|---|---|---|
| token  | `address`  | Address of token to be withdrawn. Use 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE for BNB.  |
| amt  | `uint256`  | Amount of tokens to be withdrawn. Pass `uint(-1)` to withdraw the full DSA balance of token or BNB.  |
| getId  | `uint256`  | ID to get `amt`. Pass 0 if unsure of its value.  |
| setId  | `uint256`  | ID to set amount withdrawn. Pass 0 if unsure of its value. |
