const Migrations = artifacts.require("Migrations");

module.exports = deployer => {
  deployer.deploy(Migrations, { gas: 5000000 });
};
