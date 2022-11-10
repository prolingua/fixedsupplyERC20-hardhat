async function main() {
    const GoldToken = await ethers.getContractFactory("GoldToken");
    const goldToken = await GoldToken.deploy(1000000)
    await goldToken.deployed();
    console.log("GoldToken deployed to: ", goldToken.address);
}
main();