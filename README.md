# fixedsupplyERC20-hardhat
npm install
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy_goldtoken.js --network testnet
npx hardhat verify --constructor-args scripts/argument.js --network testnet {contract_address} 