
## Smart Contract Insurance Factory README

This README file provides an overview of the three Ethereum smart contracts included in this repository and instructions on how to install and interact with them using ethers.js.

### Smart Contracts Overview

1. **InsuranceFactory.sol**: This contract acts as a factory to create two types of insurance contracts: CryptoWalletInsurance and CollateralProtectionInsurance. The `createCryptoWalletInsurance` function allows users to create an insurance contract for their crypto wallet by providing the insured amount. The `createCollateralProtectionInsurance` function enables users to create a collateral protection insurance contract.

2. **InsuranceVault.sol**: This contract represents an insurance vault that offers coverage for users' crypto wallets. Users can purchase a policy by paying the required coverage amount, and they will receive a reward in tokens when the policy expires. The owner of the wallet (the policyholder) can claim the insurance after the policy expiration if certain conditions are met.

3. **LoanProtectionService.sol**: This contract provides a loan protection service where users can request a loan with collateral. The contract checks the loan amount and duration to set the repayment amount and the collateral threshold. The loan can be collected and repaid by the borrower.


## Installation and Running the Code

To install and run the smart contracts using Ethers.js and Hardhat, follow these steps:

1.  Clone the project repository to your local machine.
2.  Navigate to the project directory.
3.  Run `npm install` to install the project dependencies.
4.  Run `npx hardhat node` to start the Hardhat node
5.  Run `npx hardhat run --network localhost ./scripts/deploy.js` to compile and deploy the contracts locally
6. Run `npx hardhat test` to run the tests and ensure the contracts are working correctly.

Please note that you need to have Node.js and npm (Node Package Manager) installed on your machine before running the above commands.

Feel free to reach out if you have any further questions or need assistance with running the code.