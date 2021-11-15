# Allbridge Wrapped Token EVM Contracts

* Install truffle `npm install -g truffle` [Truffle docs](https://www.trufflesuite.com/docs/truffle/getting-started/installation)
* Install dependencies `npm install`
* Build the contract `truffle compile`
* Create `.evn` file and specify wallet private key for the corresponding network. And specify INFURA_KEY if needed, or change provider in the `truffle-config.js`
* Check carefully `gasPrice` in the `truffle-config.js`
* Deploy the contract `truffle deploy --network <NETWORK> -b <BRIDGE_ADDRESS> -ts <TOKEN_SOURCE> -tsa <TOKEN_SOURCE_ADDRESS> -d <DECIMALS> -s <SYMBOL> -n <NAME>`


* NETWORK - Must be the same name as in the `truffle-config.js`
* BRIDGE_ADDRESS - Bridge address to set authority
* TOKEN_SOURCE - Token source blockchain id (ETH, BSC, POL, HECO, AVA, CELO, SOL)
* TOKEN_SOURCE_ADDRESS - Token address on the source blockchain (32 bytes or fewer hex, started with "0x")
* DECIMALS - Token decimals
* SYMBOL - Token symbol
* NAME - Token name
