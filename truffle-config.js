const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 8545,
            network_id: '*'
        },
        rinkeby: {
            provider: () => {
                return new HDWalletProvider(process.env.MNEMONIC, `https://rinkeby.infura.io/v3/${process.env.INFURA}`, 0, 3)
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
