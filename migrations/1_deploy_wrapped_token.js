const WrappedToken = artifacts.require("WrappedToken");
const { program } = require('commander');

program
  .requiredOption('-b, --bridge <value>', 'Bridge contract address')
  .requiredOption('-ts, --token-source <value>', 'Token source')
  .requiredOption('-tsa, --token-source-address <value>', 'Token source address (hex 0x...)')
  .requiredOption('-d, --decimals <value>', 'Decimals')
  .requiredOption('-s, --symbol <value>', 'Symbol')
  .requiredOption('-n, --name <value>', 'Name')
  .option('--network <value>', 'Network')

module.exports = async function(deployer) {
  function toBlockchainIdHex(str) {
    return web3.utils.padRight(web3.utils.asciiToHex(str), 8, '0')
  }

  program.parse();
  const {
    tokenSource,
    tokenSourceAddress,
    decimals,
    name,
    symbol,
    bridge,
  } = program.opts();

  if (!tokenSource || !tokenSourceAddress || !decimals || !name || !symbol || !bridge) {
    throw new Error("Some value is not specified");
  }
  console.log('Bridge:', bridge);
  console.log('Token source:', tokenSource);
  console.log('Token source address:', tokenSourceAddress);
  console.log('Decimals:', decimals);
  console.log('Name:', name);
  console.log('Symbol:', symbol);

  console.log('\nDeploying contract...');
  await deployer.deploy(WrappedToken, toBlockchainIdHex(tokenSource), tokenSourceAddress, decimals, name, symbol);
  const token = await WrappedToken.deployed();
  console.log('Contract deployed:', token.address);
  console.log('Changing token authority to the bridge...');
  await token.transferOwnership(bridge);
  console.log('Done');
};
