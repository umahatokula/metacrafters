# SimpleAccountFactory

SimpleAccountFactory is a sample factory contract written in Solidity. It serves as a template for creating instances of SimpleAccount contracts and provides additional functionalities such as adding funds to wallets and retrieving wallet balances.

## Installation

To get started with SimpleAccountFactory, follow the instructions below:

### Prerequisites

Make sure you have the following dependencies installed:

- Node.js (v14.17.0 or later)
- npm (v6.14.13 or later)
- Hardhat (v2.6.0 or later)

### Clone the Repository

Start by cloning the repository containing the Solidity code:

```bash
git clone <repository_url>
```

### Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd SimpleAccountFactory
npm install
```

### Compile the Contracts

Compile the Solidity contracts using Hardhat:

```bash
npx hardhat compile
```


## Usage

To use SimpleAccountFactory in your project, follow these steps:

1. Import the contract in your Solidity file:

```solidity
import "./SimpleAccountFactory.sol";
```

2. Deploy the SimpleAccountFactory contract:

```solidity
SimpleAccountFactory factory = new SimpleAccountFactory(entryPointAddress);
```

Replace `entryPointAddress` with the address of your desired entry point contract.

3. Create a new SimpleAccount using the factory:

```solidity
SimpleAccount account = factory.createAccount(owner, salt);
```

Replace `owner` with the address of the account owner, and `salt` with a unique identifier for the account.

4. Add funds to a wallet:

```solidity
factory.addWalletFunds(accountAddress);
```

Replace `accountAddress` with the address of the account to which you want to add funds.

5. Retrieve the balance of a wallet:

```solidity
uint256 balance = factory.getBalance(accountAddress);
```

Replace `accountAddress` with the address of the account whose balance you want to retrieve.

## License

SimpleAccountFactory is licensed under the GNU General Public License v3.0 (GPL-3.0). For more details, please refer to the [LICENSE](./LICENSE) file.

## Acknowledgments

This code is built using the OpenZeppelin library, which provides useful contract utilities and proxies for the Ethereum ecosystem. Special thanks to the OpenZeppelin team for their valuable contributions.

If you have any questions or encounter any issues, please feel free to reach out.