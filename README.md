# fixedsupplyERC20-hardhat
+ install dependencies: npm install
+ compile the smart contract: npx hardhat compile
+ test the smart contract: npx hardhat test
+ deploy the smart contract to Fantom Testnet: npx hardhat run scripts/deploy_goldtoken.js --network testnet
+ verify the smart contract on Fantom Testnet: npx hardhat verify --contract contracts/GoldToken.sol:GoldToken  --constructor-args scripts/argument.js --network testnet {contract_address} 