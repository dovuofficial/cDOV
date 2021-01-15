# cDOV

cDOV is a decentralized elastic supply protocol which focuses on a store of value for the potential usage of a carbon offset, a fork of Ampleforth. It maintains a stable unit price by adjusting supply directly to and from wallet holders. You can read the [whitepaper](https://www.ampleforth.org/paper/) for the motivation and a complete description of the protocol.

This repository is a collection of [smart contracts](http://ampleforth.org/docs) that implement the Ampleforth protocol on the Ethereum blockchain.

cDOV extends Ampleforth in a number of ways including through a yield mechanism for holders that provides up to 100% APY in carbon offset potential, enabling token holders to live a carbon neutral life. 

Read more about cDOV and our plans for the DOVU data carbon market [whitepaper](https://blog.dovu.dev/dov-v2-whitepaper-cdov/) for cDOV

The official mainnet addresses are:

- ERC-20 Token: TBD
- Supply Policy: TBD
- Orchestrator: TBD
- Market Oracle: TBD
- CPI Oracle: TBD

## Table of Contents

- [Install](#install)
- [Testing](#testing)
- [Testnets](#testnets)
- [Contribute](#contribute)
- [License](#license)

## Install

```bash
# Install project dependencies
yarn
```

## Testing

```bash
# Run all unit tests (compatible with node v12+)
yarn test
```

## Testnets

There is a testnet deployment on Ropsten. It rebases hourly using real market data.

- ERC-20 Token: TBD
- Supply Policy: TBD
- Orchestrator: TBD
- Market Oracle: TBD
- CPI Oracle: TBD

## Contribute

To report bugs within this package, create an issue in this repository.
For security issues, please contact support@dovu.io.
When submitting code ensure that it is free of lint errors and has 100% test coverage.

```bash
# Lint code
yarn lint

# Format code
yarn format

# Run solidity coverage report (compatible with node v12)
yarn coverage

# Run solidity gas usage report
yarn profile
```

## License

[GNU General Public License v3.0 (c) 2018 Fragments, Inc.](./LICENSE)
