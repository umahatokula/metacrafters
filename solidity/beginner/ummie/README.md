# Ummie Token

Ummie is a simple ERC-20 compatible token implemented on the Ethereum blockchain using Solidity programming language. This contract allows for token creation, transfers, and burning.

## Features

- **Token Name and Symbol**: The token has a customizable name and symbol, which can be set during contract deployment.
- **Total Supply**: The total supply of Ummie tokens is tracked by the contract.
- **Token Ownership**: The contract owner has special privileges, such as minting new tokens and executing certain actions restricted to the owner.
- **Token Balance**: The contract keeps track of token balances for each address that holds Ummie tokens.
- **Transfer Tokens**: Token holders can transfer Ummie tokens to other addresses, provided they have a sufficient balance.
- **Token Burning**: Token holders can burn (destroy) their tokens, reducing the total supply.

## Getting Started

To interact with the Ummie token contract, you will need an Ethereum development environment and an Ethereum account with testnet or mainnet Ether (ETH) for gas fees.

1. Deploy the Contract: Deploy the Ummie contract to an Ethereum network of your choice, such as Ganache, Ropsten, or Mainnet. During deployment, provide the desired token name and symbol as constructor arguments.
2. Mint Tokens (Owner Only): After deploying the contract, only the contract owner can mint new Ummie tokens. Use the `mint` function to increase the token balance of the contract owner.
3. Transfer Tokens: Token holders can transfer Ummie tokens to other addresses using the `transfer` function. Make sure to have enough tokens in your balance before initiating a transfer.
4. Burn Tokens: If you wish to destroy some of your Ummie tokens, call the `burn` function, specifying the amount you want to burn.

## License

The Ummie token contract is licensed under the GNU General Public License v3.0. You can find the license text in the SPDX-License-Identifier comment at the top of the Solidity file.

**Note:** This readme file is for informational purposes only and does not constitute legal or financial advice. Use the Ummie token contract at your own risk, and make sure to understand the implications of deploying and interacting with smart contracts on the Ethereum blockchain.