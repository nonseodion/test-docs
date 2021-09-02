---
sidebar_position: 2
---

# DSA Contracts

## Core contracts

The core contracts enable the DSA to perform its two core functions, execute function calls and update account extensions. They are:

- **NbnAccountV2**: Executes all function calls to the DSA.
- **NbnImplementations**: Adds, removes and stores the list of account extensions.

## Account Extensions

The account extensions as the name suggests extend the functionality of the DSA. The Nubian finance team has added two extensions:

- **NbnDefaultImplementation**: Adds and removes owners called authorities from the account.
- **NbnImplementationM1**: Allows the DSA to cast spells which are functions that usually interact with DeFi protocols using [connectors](../Connectors/connector).
