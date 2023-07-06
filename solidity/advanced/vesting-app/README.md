
# TokenVesting Contract

The TokenVesting contract is a Solidity smart contract that allows organizations to manage and distribute tokens to stakeholders over a vesting period. Stakeholders can be whitelisted by the organization, and they can claim their allocated tokens after the vesting period has ended.

## Features

- Organization registration: Organizations can register themselves by providing the address of the token contract they want to distribute and a name for identification.
- Stakeholder addition: Organizations can add stakeholders by specifying their address, vesting period, and total number of tokens allocated to them.
- Address whitelisting: Organizations can whitelist addresses, allowing stakeholders to claim their tokens after the vesting period ends.
- Token claiming: Stakeholders can claim their allocated tokens after the vesting period has ended.

## Installation and Local Deployment using Ethers.js

To install and run the TokenVesting contract locally using Ethers.js, follow these steps:

### Prerequisites

- Node.js and npm (Node Package Manager) should be installed on your machine.

### Step 1: Set up the project

1. Create a new directory for your project.
2. Open a command line interface and navigate to the project directory.
3. Initialize a new npm project by running the following command:
   ```
   npm init -y
   ```

### Step 2: Install dependencies

1. Install the required dependencies (Ethers.js) by running the following command:
   ```
   npm install ethers
   ```

### Step 3: Create a JavaScript file

1. Create a new JavaScript file (e.g., `app.js`) in the project directory.

### Step 4: Import the required dependencies and initialize Ethers.js

1. Open the `app.js` file in a text editor.
2. Add the following code to import the required dependencies and initialize Ethers.js:
   ```javascript
   const ethers = require('ethers');
   
   // Replace <CONTRACT_ADDRESS> with the address of the deployed TokenVesting contract
   const contractAddress = '<CONTRACT_ADDRESS>';
   
   // Replace <PRIVATE_KEY> with the private key of the Ethereum account
   const privateKey = '<PRIVATE_KEY>';
   
   // Connect to the Ethereum network using the provided private key
   const provider = new ethers.providers.JsonRpcProvider('<ETH_NODE_URL>');
   const wallet = new ethers.Wallet(privateKey, provider);
   
   // Create an instance of the TokenVesting contract
   const contract = new ethers.Contract(contractAddress, abi, wallet);
   ```

### Step 5: Interact with the TokenVesting contract

Now you can interact with the TokenVesting contract using the `contract` instance.

Here are some example interactions you can perform:

- Register an organization:
  ```javascript
  // Replace <TOKEN_CONTRACT_ADDRESS> and <ORGANIZATION_NAME> with appropriate values
  await contract.registerOrganization('<TOKEN_CONTRACT_ADDRESS>', '<ORGANIZATION_NAME>');
  ```

- Add a stakeholder:
  ```javascript
  // Replace <ORGANIZATION_ADDRESS>, <STAKEHOLDER_ADDRESS>, <VESTING_PERIOD>, and <TOTAL_TOKENS> with appropriate values
  await contract.addStakeHolder('<ORGANIZATION_ADDRESS>', '<STAKEHOLDER_ADDRESS>', <VESTING_PERIOD>, <TOTAL_TOKENS>);
  ```

- Whitelist an address:
  ```javascript
  // Replace <STAKEHOLDER_ADDRESS> and <VESTING_PERIOD> with appropriate values
  await contract.whitelistAddress('<STAKEHOLDER_ADDRESS>', <VESTING_PERIOD>);
  ```

- Claim tokens:
  ```javascript
  await contract.claimTokens();
  ```

- Get the balance of claimed tokens for a stakeholder:
  ```javascript
  const balance = await contract.get