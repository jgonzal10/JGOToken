var JGOToken = artifacts.require("./JGOToken.sol");

module.exports = function(deployer) {
  deployer.deploy(JGOToken,1000000);
};
