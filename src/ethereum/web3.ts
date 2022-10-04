import Web3 from 'web3';

let innerWeb3;

if (window && window.ethereum) {
  // We are in the browser and metamask is running
  window.ethereum.request?.({ method: 'eth_requestAccounts' });
  innerWeb3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/7a18cd68f3ea4ad083eff69e644771d3');
  innerWeb3 = new Web3(provider);
}

const web3 = innerWeb3;

export default web3;
