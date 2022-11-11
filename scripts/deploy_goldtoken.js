const etherToWei = (n) => {
    return new web3.utils.BN(web3.utils.toWei(n.toString(), 'ether'));
  };
const TOTAL_SUPPLY = etherToWei(1000_000);
async function main() {
    const GoldToken = await ethers.getContractFactory("GoldToken");
    const goldToken = await GoldToken.deploy(TOTAL_SUPPLY.toString());
    await goldToken.deployed();
    console.log("GoldToken deployed to: ", goldToken.address);
}
main();