# A simple Identity Management System

This is a simplified ID management system that uses the `isRegistered` property of the user to indicate if he/she is registered or not.

The aim is to show ability to read and write to a smart contract.

To run the code, follow the following instructions:

After cloning the github, you will want to do the following to get the code running on your computer.

1. Inside the project directory, in the terminal type: npm i
2. Open two additional terminals in your VS code
3. In the second terminal type: npx hardhat node
4. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
5. Back in the first terminal, type npm run dev to launch the front-end.

After this, the project will be running on your localhost. 
Typically at http://localhost:3000/
