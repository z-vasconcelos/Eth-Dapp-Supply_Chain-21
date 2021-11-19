const HDWalletProvider = require("@truffle/hdwallet-provider");
var mnemonic = "tide west sock play coyote weapon run rebel used apart negative vote";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/6178ae20e347446d93c98ec837649276'),
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