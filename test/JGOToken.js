var JGOToken = artifacts.require("./JGOToken.sol");
contract('JGOToken',function(accounts){
	var tokenInstance;

	it('initializes the name and symbol', function(){
		return JGOToken.deployed().then(function(instance){
			tokenInstance=instance;
			return tokenInstance.name();
		}).then(function(name){
			assert.equal(name,'JGOToken','SET NAME')
			return tokenInstance.symbol();
		}).then(function(symbol){
			assert.equal(symbol,'JGO','SET symbol')
			return tokenInstance.standar();
		}).then(function(standar){
			assert.equal(standar,'JGOToken v1.0','has correct standar')
		});
	});

	it('set the total supply upon deployment', function(){
		return JGOToken.deployed().then(function(instance){
			tokenInstance = instance;
			return tokenInstance.totalSupply();
		}).then(function(totalSupply){
			assert.equal(totalSupply.toNumber(),1000000,'set the total supply to 1000000')
			return tokenInstance.balanceOf(accounts[0]);
		}).then(function(adminBalance){
			assert.equal(adminBalance.toNumber(),1000000,'it allocates the initial supply to the adminBalance')
		});
	});
})