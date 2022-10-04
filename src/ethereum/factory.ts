import { AbiItem } from 'web3-utils';
import web3 from './web3';
import FootballBetFactory from './build/FootballBetFactory.json';

const instance = new web3.eth.Contract(
  FootballBetFactory.abi as AbiItem[],
  '0x205735d7376F199aD76bc4f30F299DADD2DfE659',
);

export default instance;
