/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const contractFileName = 'bet_contract.sol';

const contractPath = path.resolve(__dirname, 'contracts', contractFileName);
const source = fs.readFileSync(contractPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    [contractFileName]: {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts[contractFileName];
fs.ensureDirSync(buildPath);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
Object.entries(output).forEach((entry) => {
  const [key, contract] = entry;
  fs.outputJSONSync(path.resolve(buildPath, `${key}.json`), contract);
});
