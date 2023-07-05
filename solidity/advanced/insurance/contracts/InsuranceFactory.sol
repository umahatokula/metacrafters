// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./InsuranceVault.sol";
import "./LoanProtectionService.sol";

contract InsuranceFactory  {
    mapping(address => address) private  userInsuranceContracts;
    mapping(address => address) private  userCryptowalletContract;

    event CryptoWalletInsuranceCreated(address indexed user, address insuranceContract);
    event CollateralProtectionInsuranceCreated(address indexed user, address insuranceContract);

    function createCryptoWalletInsurance(uint256 _insuredAmount) external {
        require(userCryptowalletContract[msg.sender] == address(0), "User already has an insurance contract");

        InsuranceVault insuranceContract = new InsuranceVault(_insuredAmount);
        userCryptowalletContract[msg.sender] = address(insuranceContract);

        emit CryptoWalletInsuranceCreated(msg.sender, address(insuranceContract));
    }

    function createCollateralProtectionInsurance() external {
        require(userInsuranceContracts[msg.sender] == address(0), "User already has an insurance contract");

        LoanProtectionService insuranceContract = new LoanProtectionService();
        userInsuranceContracts[msg.sender] = address(insuranceContract);

        emit CollateralProtectionInsuranceCreated(msg.sender, address(insuranceContract));
    }
    
    function getuserInsuranceContracts() external view returns(address){
       return userInsuranceContracts[msg.sender];
    }
    function getUserCryptowalletContract() external view returns(address){
       return userCryptowalletContract[msg.sender];
    }
}