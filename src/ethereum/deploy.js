/* eslint-disable @typescript-eslint/no-var-requires */
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/FootballBetFactory.json');

const provider = new HDWalletProvider(
  'twist omit west bind cloth now round web hurry tomorrow swallow hedgehog',
  // remember to change this to your own phrase!
  'https://sepolia.infura.io/v3/933a6f13718947448cac4a6a07a93099',
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  // eslint-disable-next-line no-console
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ gas: '1400000', from: accounts[0] });

  // eslint-disable-next-line no-console
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();
