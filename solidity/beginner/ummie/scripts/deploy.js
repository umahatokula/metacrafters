const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const ummie = await hre.ethers.deployContract("Ummie");

  await ummie.waitForDeployment();

  console.log(`Ummie Token deployed to`, await ummie.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
