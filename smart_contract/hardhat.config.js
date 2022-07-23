//https://eth-goerli.g.alchemy.com/v2/qAT1y9vXv493aQ-q47yyhrQQsnzzv4t0

require('@nomiclabs/hardhat-waffle');

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/qAT1y9vXv493aQ-q47yyhrQQsnzzv4t0',
      accounts:['0e8fe05456206315843f22fd33260132a80ca33d3cf36d922a571fc783dc8c0a']
    }

  }
};
