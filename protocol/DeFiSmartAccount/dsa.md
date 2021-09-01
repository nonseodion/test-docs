---
sidebar_position: 1
label: "Introduction"
---

# DeFi Smart Account (DSA)

The Nubian Finance Ecosystem is built for developers and users to leverage the full potential of the Decentralized Finance (DeFi) ecosystem using DSAs. The upgradability and extensibility of DSAs allow them to support new protocols. It makes use of account extensions to give the DSA additional features and capabilities. These extensions are added to improve the DSA's core functionalities like adding and removing owners, perform complex DeFi operations, interact with DeFi protocols or do almost anything.

## How DSA works

The main contract of the DSA is a proxy contract that uses a fallback to receive all the calls. The DSA executes each account interaction in this order:

- Intercepts the call with a `fallback` function that sends the `msg.sig` to the implementations contract.
- The implementations contract receives the `msg.sig` and returns the address of the account extension using a mapping of function signatures and the address of the account extension implementing it.
- The remaining execution is delegated to the returned address using solidity's `delegate` function.

From the above execution, the DSA consists of a proxy, implementations contract and various account extensions listed in the implementations contract.

[Connectors](../Connectors/connector) are a core part of the Nubian ecosystem an account extension allows the DSA to interact with them.
