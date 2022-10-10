import Web3 from 'web3';
import TestNetURL from './config';

let innerWeb3;

if (window && window.ethereum) {
  // We are in the browser and metamask is running
  window.ethereum.request?.({ method: 'eth_requestAccounts' });
  innerWeb3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(TestNetURL);
  innerWeb3 = new Web3(provider);
}

const web3 = innerWeb3;

export default web3;
