  const { expect } = require("chai");
  const etherToWei = (n) => {
    return ethers.utils.parseEther(n.toString());
  };
  const TOTAL_SUPPLY = etherToWei(1000_000);

  describe("GoldToken", () => {
    let goldToken;
    let owner, otherAccount;

    beforeEach(async () => {
        [owner, otherAccount, otherAccount2] = await ethers.getSigners();
        const GoldToken = await ethers.getContractFactory('GoldToken');
        goldToken = await GoldToken.deploy(TOTAL_SUPPLY.toString());
    });

    describe("Deployment",  () => {
        it("Should has total supply of 1000_000 GoldTokens", async () => {
            const totalSupply = await goldToken.totalSupply();
            expect(totalSupply.toString()).to.equal(TOTAL_SUPPLY.toString());
        });
    });
    describe("Events", () => {
        it("Should emit Transfer event with correct arguments", async () => {
            await expect(goldToken.transfer(otherAccount.address, 1000))
            .to.emit(goldToken, "Transfer").withArgs(owner.address, otherAccount.address, 1000);
        });
    });

    describe("Reverts", () => {
        it("Should cause revert 'ERC20: transfer amount exceeds balance'", async () => {
            await expect(goldToken.connect(otherAccount).transfer(otherAccount2.address, 1000))
            .to.be.revertedWith("ERC20: transfer amount exceeds balance");
        });
    });
  })
