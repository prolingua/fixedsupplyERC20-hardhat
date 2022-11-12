// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract GoldToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Gold", "GLD") {
        console.log("deployer: ", msg.sender);
        _mint(msg.sender, initialSupply);
    }
}