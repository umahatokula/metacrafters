require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/DV3n47VNVq4dkFyiZ1vY2ryATlrJGDWd`,
      accounts: ['cbb19f5bada5853ea966ae7d6deab4e623867eb42ec2681cafd74314bd25f9a8']
    }
  }
};