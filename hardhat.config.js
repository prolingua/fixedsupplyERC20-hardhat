require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");
require('hardhat-contract-sizer');
require('@nomicfoundation/hardhat-chai-matchers');
require("@nomiclabs/hardhat-web3");

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_KEY = process.env.API_KEY;
module.exports = {
  solidity: "0.8.17",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    development: {
      url: 'http://127.0.0.1:8545'
    },
    testnet: {
      url: 'https://rpc.testnet.fantom.network',
      chainId: 4002,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    mainnet: {
      url: 'https://rpcapi.fantom.network',
      chainId: 250,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: {
      ftmTestnet: `${API_KEY}`,
      ftmMainnet: `${API_KEY}`
    }
  },
  contractSizer: {
    runOnCompile: true,
  },
};