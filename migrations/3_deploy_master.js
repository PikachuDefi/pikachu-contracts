const PikachuToken = artifacts.require("PikachuToken");
const Timelock = artifacts.require("Timelock");
const Multicall = artifacts.require("Multicall");
const MasterChefV2 = artifacts.require("MasterChefV2");

module.exports = async function (deployer) {
  let pika = await PikachuToken.deployed()
  await deployer.deploy(MasterChefV2, pika.address, "0xBA82DA38C715aec2f53721B52612D7c26Cdf4319", "0x46d59513d24A08649499b9DC03A85a99920AD9e6", "1000000000000000000", 0);
};
