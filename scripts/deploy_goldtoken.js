const { ethers } = require("hardhat");

const etherToWei = (n) => {
    return ethers.utils.parseEther(n.toString())
  };
const TOTAL_SUPPLY = etherToWei(1000_000);
async function main() {
    const GoldToken = await ethers.getContractFactory("GoldToken");
    const goldToken = await GoldToken.deploy(TOTAL_SUPPLY.toString());
    await goldToken.deployed();
    console.log("GoldToken deployed to: ", goldToken.address);
}
main();