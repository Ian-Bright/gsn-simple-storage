let { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers')
const SimpleStorage = artifacts.require("./SimpleStorage.sol")
const TestPaymaster = artifacts.require("./TestPaymaster.sol")

contract("SimpleStorage", accounts => {
    let receiver, paymaster
    let owner = accounts[0]
    let user = accounts[2] //in my account, accounts[2] has no ether. change according to your accounts
    let zero = '0x0000000000000000000000000000000000000000'
    let relay = '0x53C88539C65E0350408a2294C4A85eB3d8ce8789'

    before(async () => {
        paymaster = await TestPaymaster.deployed()
        receiver = await SimpleStorage.deployed()
        await paymaster.setRelayHub(relay)
        await paymaster.setTarget(receiver.address)
        await paymaster.send(1e10, {from: accounts[0]})
    })

    it("...should store the value 89.", async () => {

        // Set value of 89
        await receiver.set(89, { from: accounts[1] })

        // Get stored value
        const storedData = await receiver.get()

        assert.equal(storedData, 89, "The value 89 was not stored.")
    })
});