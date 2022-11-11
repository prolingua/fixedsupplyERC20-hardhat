  const { expect } = require("chai");
  const etherToWei = (n) => {
    return new web3.utils.BN(web3.utils.toWei(n.toString(), 'ether'));
  };
  const TOTAL_SUPPLY = etherToWei(1000_000);

  describe("GoldToken", () => {
    let goldToken;
    let owner, otherAccount;

    beforeEach(async () => {
        [owner, otherAccount] = await ethers.getSigners();
        const GoldToken = await ethers.getContractFactory('GoldToken');
        goldToken = await GoldToken.deploy(TOTAL_SUPPLY.toString());
    });

    describe("Deployment",  () => {
        it("Should has total supply of 1000_000 GoldTokens", async () => {
            const totalSupply = await goldToken.totalSupply();
            expect(totalSupply.toString()).to.equal(TOTAL_SUPPLY.toString());
        });

        it("Should emit Transfer event with correct arguments", async () => {
            await expect(goldToken.transfer(otherAccount.address, 1000, {from:owner.address}))
            .to.emit(goldToken, "Transfer").withArgs(owner.address, otherAccount.address, 1000);
        });
    })

  })
