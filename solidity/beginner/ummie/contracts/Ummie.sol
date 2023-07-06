// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;


contract Ummie{

    string public name ;
    string public symbol ;
    uint public totalSupply ;
    address public owner;

    mapping(address => uint) public balance;

    constructor (string memory _tokenName, string memory _symbol){
        name = _tokenName;
        symbol = _symbol;
        owner = msg.sender;
    }
    modifier onlyOwner() {
        require(owner == msg.sender, "Only owner can perform this action");
        _;
    }
    function mint(uint _amount) public onlyOwner() {
        balance[msg.sender] += _amount;
        totalSupply += _amount;
    }

    function transfer( address _recipient, uint _amount) public{
        require(balance[msg.sender] >= _amount, "Insufficient balance");

        balance[msg.sender] -= _amount;
        balance[_recipient] += _amount;

    }

    function burn(uint256 _amount) public {
        balance[msg.sender] -= _amount;
        totalSupply -= _amount;
    }

}