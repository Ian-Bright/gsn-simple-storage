const HDWalletProvider = require('truffle-hdwallet-provider')
require('dotenv').config()
const mnemonic = 'depart uniform weapon exotic enforce host universe easy shine gain fork arch'
const infura = 'dc9259297ea94e6c8ae401b9abc1f7db'

module.exports = {
  networks: {
      development: {
          host: '127.0.0.1',
          port: 8545,
          network_id: '*'
      },
      rinkeby: {
          provider: () => {
              return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infura}`, 0 , 2)
          },
          network_id: '4',
          ens: {
              registry: {
                  address: "0xf6305c19e814d2a75429Fd637d01F7ee0E77d615"
              }
          }
      },
  },
    compilers: {
        solc: {
            version: "^0.6.10"
        }
    }
};
