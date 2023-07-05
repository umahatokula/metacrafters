// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LoanProtectionService {
    address public vaultOwner;
    uint256 public collateralThreshold;

    struct Loan {
        uint256 amount;
        uint256 threshold;
        uint256 duration;
        uint256 repaymentAmount;
        uint256 walletBalance;
        bool isPaid;
    }

    mapping(address => uint256) public collateral;
    mapping(address => Loan) public loans;

    event LoanRequested(address indexed borrower, uint256 loanAmount, uint256 collateralAmount);
    event CollateralRefunded(address indexed borrower, uint256 collateralAmount);

    constructor() {
        vaultOwner = msg.sender;
    }

    uint256 private constant BASIC_LOAN_AMOUNT = 0.5 ether;
    uint256 private constant PREMIUM_LOAN_AMOUNT = 1 ether;
    uint256 private constant BASIC_LOAN_DURATION = 30 days;
    uint256 private constant PREMIUM_LOAN_DURATION = 60 days;

    modifier onlyOwner() {
        require(msg.sender == vaultOwner, "Only the vault owner can perform this action");
        _;
    }

    function requestLoan(uint256 loanAmount, uint256 collateralAmount) external onlyOwner {
        require(loanAmount > 0, "Loan amount must be greater than zero");
        require(collateralAmount > 0, "Collateral amount must be greater than zero");
        require(loans[msg.sender].amount == 0, "Loan already exists");

        if (loanAmount > BASIC_LOAN_AMOUNT) {
            loans[vaultOwner] = Loan(
                loanAmount,
                collateralAmount,
                block.timestamp + PREMIUM_LOAN_DURATION,
                loanAmount + (loanAmount * 20) / 100,
                0,
                false
            );
        } else if (loanAmount <= BASIC_LOAN_AMOUNT) {
            loans[vaultOwner] = Loan(
                loanAmount,
                collateralAmount,
                block.timestamp + BASIC_LOAN_DURATION,
                loanAmount + (loanAmount * 10) / 100,
                0,
                false
            );
        }

        collateral[msg.sender] = collateralAmount;
        emit LoanRequested(msg.sender, loanAmount, collateralAmount);
    }

    function collectLoan() external payable {
        require(collateral[vaultOwner] != 0, "No collateral available");
        require(loans[vaultOwner].walletBalance == 0, "Wallet balance must be zero");

        require(loans[vaultOwner].threshold >= loans[vaultOwner].amount, "Insufficient collateral");
        require(!loans[vaultOwner].isPaid, "Loan not disbursed");

        (bool sent, ) = (vaultOwner).call{value: loans[vaultOwner].amount}("");
        require(sent, "Failed to send Ether");

        loans[vaultOwner].walletBalance += loans[vaultOwner].amount;
    }

    function repayLoan() external payable {
        require(loans[vaultOwner].repaymentAmount > 0, "No loan amount to repay");
        require(msg.value >= loans[vaultOwner].repaymentAmount, "Insufficient amount");

        require(!loans[vaultOwner].isPaid, "Loan not disbursed");
        payable(address(this)).transfer(msg.value);
        loans[vaultOwner].repaymentAmount -= msg.value;

        collateral[msg.sender] = 0;

        emit CollateralRefunded(vaultOwner, msg.value);
    }

    receive() external payable {}

    // Additional functions can be added here...
}
