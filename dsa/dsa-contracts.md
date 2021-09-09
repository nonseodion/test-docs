---
sidebar_position: 2
---

# DSA Contracts

## Registry

These contracts deploy the DSAs, manage and record DSA contracts and their authorities/owners.

* **NbnIndex**: Creates new DSA contracts.
* **NbnList**: Records the the deployed DSA contracts and their authorities/owners.

## Core contracts

The core contracts enable the DSA to perform its two core functions, execute function calls and update account extensions. They are:

* **NbnAccountV2**: Executes all function calls to the DSA.
* **NbnImplementations**: Adds, removes, and stores the list of account extensions.

## Account Extensions

The account extensions add more features to the DSA. The Nubian finance team has added two extensions:

* **NbnDefaultImplementation**: Adds and removes owners called authorities from the account.
* **NbnImplementationM1**: Allows the DSA to cast spells which are functions that usually interact with DeFi protocols using [connectors](../Connectors/connector).

