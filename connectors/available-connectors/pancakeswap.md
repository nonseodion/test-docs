# Pancakeswap

Provides functions to swap tokens, add and remove liquidity on Pancakeswap.

## Address

Pancakeswap Connector is deployed at 0x546bde105B24147bbd34F3147a0FD68961515Feb on mainnet.

## Code

[main.sol](https://github.com/Open-Currency-Collective/Nubian-dsa-connectors/blob/master/contracts/connectors/pancakeswap/main.sol)

## Events

### LogDepositLiquidity

```text
    event LogDepositLiquidity( address indexed tokenA, address indexed tokenB, uint256 amtA, uint256 amtB, uint256 uniAmount, uint256 getId, uint256 setId );
```

Emitted with other spells each time a deposit occurs with [Deposit]().

### LogWithdrawLiquidity

```text
    event LogWithdrawLiquidity( address indexed tokenA, address indexed tokenB, uint256 amountA, uint256 amountB, uint256 uniAmount, uint256 getId, uint256[] setId);
```

Emitted with other spells each time a withdrawal occurs with [Withdraw]().

### LogSell

```text
    event LogSell(address indexed buyToken,address indexed sellToken,uint256 buyAmt,uint256 sellAmt,uint256 getId,uint256 setId);
```

Emitted with other spells each time a swap, sell or buy occurs with [Sell]().

## Methods

### Read-only Method

#### Name

```text
string public constant name = "PancakeswapV2-v1";
```

Returns connector name.

### State-changing Methods

#### Deposit <a id="Deposit"></a>

```text
    function deposit(
      address tokenA,
      address tokenB,
      uint256 amtA,
      uint256 amtB,
      uint256 getId,
      uint256 setId
    )
      external payable returns (string memory _eventName, bytes memory _eventParam);
```

Adds liquidity to the tokenA/tokenB pool on Pancakeswap. Here are a few things to note:

* amtA/amtB should be added in a ratio equal to the price when the transacation is executed. This adds exactly amtA and amtB to the pool.
* It creates a new pool if no pool exists and adds exactly amtA and amtB to the pool.

**Deposit Parameters**

| Parameter | Type | Description |
| :--- | :--- | :--- |
| tokenA | `address` | Address of tokenA. |
| tokenB | `address` | Address of tokenB. |
| amtA | `uint256` | Amount of tokenA to be added as liquidity. |
| amtB | `uint256` | Amount of tokenB to be added as liquidity. |
| getId | `uint256` | Not used. Pass 0. |
| setId | `uint256` | ID to store the amount of liquidity pool tokens received by the user. |

#### Withdraw <a id="Withdraw"></a>

```text
    function withdraw(
        address tokenA,
        address tokenB,
        uint256 lpAmt,
        uint256 getId
    ) external payable returns (string memory _eventName, bytes memory _eventParam)
```

Removes liquidity from the tokenA/tokenB pool on Pancakeswap. Reverts if no tokenA/tokenB pool exists.

**Withdraw Parameters**

| Parameter | Type | Description |
| :--- | :--- | :--- |
| tokenA | `address` | Address of tokenA. |
| tokenB | `address` | Address of tokenB. |
| lpAmt | `uint256` | Amount of liquidity provider \(lp\) tokens to exchange. Pass `uint(-1)` to withdraw the max amount of lp tokens owned. |
| getId | `uint256` | Not used. Pass 0. |

#### Sell <a id="Sell"></a>

```text
    function sell(
        address buyAddr,
        address sellAddr,
        uint256 sellAmt,
        uint256 unitAmt,
        uint256 getId,
        uint256 setId
    ) external payable returns (string memory _eventName, bytes memory _eventParam);
```

Used to swap, buy and sell tokens on Pancakeswap.

**Sell Parameters**

| Parameter | Type | Description |
| :--- | :--- | :--- |
| buyAddr | `address` | Address of token to buy or swap from. Pass 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE for BNB. |
| sellAddr | `address` | Address of token to sell or swap to. Pass 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE for BNB. |
| sellAmt | `uint256` | Amount of sellAddr tokens to buy. |
| unitAmt | `uint256` | Price of sellAddr token expressed in the buyAddr token \(i.e buyAmt/sellAmt  _10\*_18\) with slippage. |
| getId | `uint256` | Not used. Pass 0. |
| setId | `uint256` | ID to store amount of buyAddr tokens bought. |

