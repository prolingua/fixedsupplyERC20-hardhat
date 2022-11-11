  const { expect } = require("chai");
  const TOTAL_SUPPLY = 1_000_000_000_000;

  describe("GoldToken", function () {
    let goldToken;
    let owner, otherAccount;

    beforeEach(async () => {
        [owner, otherAccount] = await ethers.getSigners();
        const GoldToken = await ethers.getContractFactory('GoldToken');
        goldToken = await GoldToken.deploy(TOTAL_SUPPLY);
    });

    describe("Deployment", function () {
        it("Should has total supply of 1000_000_000_000", async function () {
            const totalSupply = await goldToken.totalSupply();
            expect(totalSupply.toString() * 1).to.equal(TOTAL_SUPPLY);
        });

        it("Should emit Transfer event", async function() {
            await expect(goldToken.transfer(otherAccount.address, 1000, {from:owner.address})).to.emit(goldToken, "Transfer");
        });
    })

  })
