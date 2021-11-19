const HDWalletProvider = require("@truffle/hdwallet-provider");
var mnemonic = "your mnemonic here";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, 'infura rinkeby endpoint'),
        network_id: 4,
        gas: 4500000,       
        gasPrice: 10000000000
    }
  },
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};
