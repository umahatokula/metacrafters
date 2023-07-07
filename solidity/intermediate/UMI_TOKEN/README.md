# UmiToken

UmiToken is a Solidity smart contract that represents a simple token called UMI. It allows for token minting, transfers, and burning functionality.

## Installation

To get started with UmiToken, follow the instructions below:

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
cd UmiToken
npm install
```

### Compile the Contracts

Compile the Solidity contracts using Hardhat:

```bash
npx hardhat compile
```

### Test the Contracts

Run the test suite to ensure that everything is functioning correctly:

```bash
npx hardhat test
```

If the tests pass without any errors, you can proceed to use UmiToken in your project.

## Usage

To use UmiToken in your project, follow these steps:

1. Import the contract in your Solidity file:

```solidity
import "./UmiToken.sol";
```

2. Deploy the UmiToken contract:

```solidity
UmiToken token = new UmiToken();
```

3. Mint tokens:

```solidity
token.mint(toAddress, amount);
```

Replace `toAddress` with the address to which you want to mint the tokens, and `amount` with the desired token amount.

4. Transfer tokens:

```solidity
token.transfer(toAddress, amount);
```

Replace `toAddress` with the address to which you want to transfer the tokens, and `amount` with the desired token amount.

5. Burn tokens:

```solidity
token.burn(amount);
```

Burns the specified amount of tokens from the sender's balance.

## Contract Details

- `owner`: The address of the contract owner.
- `name`: The name of the token ("UMI Token").
- `symbol`: The symbol of the token ("UMI").
- `totalSupply`: The total supply of tokens.
- `balances`: A mapping of addresses to their token balances.

## License

UmiToken is licensed under the MIT License. For more details, please refer to the [LICENSE](./LICENSE) file.

If you have any questions or encounter any issues, please feel free to reach out.