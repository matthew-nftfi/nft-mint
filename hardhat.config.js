require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.RINKEBY_ALCHEMY_HTTPS_KEY,
      accounts: [process.env.MINTER_PRIVATE_KEY]
    },
    goerli: {
      url: process.env.GOERLI_ALCHEMY_HTTPS_KEY,
      accounts: [process.env.MINTER_PRIVATE_KEY]
    },
  }
};
