// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UmiToken {
    address public  owner;
    string public name;
    string public symbol;
    uint256 public totalSupply;
    mapping(address => uint256) public balances;
    

    constructor() {
        owner = msg.sender;
        name = "UMI Token";
        symbol = "UMI";
        totalSupply = 1000;
    }

    function mint( address _to, uint256 _value) public returns (bool success) {
        require(msg.sender == owner, "Only the contract owner can mint tokens");

        balances[_to] += _value;
        totalSupply += _value;

        return true;
    }

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balances[msg.sender] >= _value, "Insufficient balance");

        balances[msg.sender] -= _value;
        balances[_to] += _value;

        return true;
    }

    function burn(uint256 _value) public returns (bool success) {
        require(balances[msg.sender] >= _value, "Insufficient balance");

        balances[msg.sender] -= _value;
        totalSupply -= _value;

        return true;
    }
}

