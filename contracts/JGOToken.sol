pragma solidity ^0.4.2;

contract JGOToken{

	string public name = "JGOToken";
	string public symbol = "JGO";
	uint256 public totalSupply;
	string public standar = "JGOToken v1.0";
	mapping(address => uint256) public balanceOf;
	function JGOToken(uint256 _intialSupply) public{
		balanceOf[msg.sender]=_intialSupply;
		totalSupply = _intialSupply;
		//allocate the _intialSupply
	}


}