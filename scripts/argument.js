const etherToWei = (n) => {
    return new web3.utils.BN(web3.utils.toWei(n.toString(), 'ether'));
  };
const TOTAL_SUPPLY = etherToWei(1000_000);
module.exports = [
   TOTAL_SUPPLY.toString()
];