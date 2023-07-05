// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract InsuranceVault {
    address public walletOwner;
    bool public isCovered;
    uint256 public coverageAmount;
    uint256 public rewardTokens;
    uint256 constant private BASIC_DURATION = 30 days;
    uint256 constant private STANDARD_DURATION = 60 days;

    uint256 public expirationTime;

    mapping(address => uint256) public ethBalance;
    mapping(address => uint256) public tokenBalance;

    uint256 constant private BASIC_POLICY_PRICE = 1000000000;
    uint256 constant private STANDARD_POLICY_PRICE = 100000000;

    event PolicyPaymentReceived(address indexed payer, uint256 amount);
    event InsuranceClaimed(address indexed claimant, uint256 amount);

    constructor(uint256 _coverageAmount) {
        walletOwner = msg.sender;
        coverageAmount = _coverageAmount;
    }

    function purchasePolicy() external payable {
        require(!isCovered, "User is already covered");
        require(msg.value >= coverageAmount, "Invalid amount");
        require(block.timestamp > expirationTime, "You cannot purchase now");
        ethBalance[walletOwner] += msg.value;

        if (msg.value < 1 ether) {
            expirationTime = block.timestamp + BASIC_DURATION;
            rewardTokens = (msg.value * 4 * expirationTime) / BASIC_POLICY_PRICE;
        } else if (msg.value >= 1 ether) {
            expirationTime = block.timestamp + STANDARD_DURATION;
            rewardTokens = (msg.value * 9 * expirationTime) / STANDARD_POLICY_PRICE;
        }

        isCovered = true;
        emit PolicyPaymentReceived(msg.sender, msg.value);
    }

    modifier onlyOwner() {
        require(msg.sender == walletOwner, "Only the owner can perform this action");
        _;
    }

    function claimInsurance() external payable onlyOwner() {
        require(isCovered, "The owner is not covered");
        require(block.timestamp > expirationTime, "The insurance has not expired yet");
        require(ethBalance[walletOwner] != 0, "No payment has been made for the insurance");

        isCovered = false;
        tokenBalance[walletOwner] += rewardTokens;
        (bool sent, ) = (walletOwner).call{value: address(this).balance}("");
        require(sent, "Failed to send Ether");

        emit InsuranceClaimed(msg.sender, address(this).balance);
    }

    function getEthBalance() external view returns (uint256) {
        return ethBalance[msg.sender];
    }

    function getTokenBalance() external view returns (uint256) {
        return tokenBalance[msg.sender];
    }
}
