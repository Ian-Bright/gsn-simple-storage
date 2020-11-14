const SimpleStorage = artifacts.require("./SimpleStorage.sol");
const TestPaymaster = artifacts.require("./TestPaymaster.sol");

module.exports = (deployer) => {
    const trusted_forwarder = '0x956868751Cc565507B3B58E53a6f9f41B56bed74'
    deployer.deploy(SimpleStorage, trusted_forwarder);
    deployer.deploy(TestPaymaster, { gas: 5000000 });
};