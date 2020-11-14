pragma solidity ^0.6.10;

import "@opengsn/gsn/contracts/BaseRelayRecipient.sol";
import "@opengsn/gsn/contracts/interfaces/IKnowForwarderAddress.sol";

contract SimpleStorage is BaseRelayRecipient, IKnowForwarderAddress {
    string public override versionRecipient = "2.0.0";
    uint storedData;

    constructor(address _forwarder) public {
    trustedForwarder = _forwarder;
    }

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }

    function getTrustedForwarder() public view
    override returns(address) {
    return trustedForwarder;
    }
}
