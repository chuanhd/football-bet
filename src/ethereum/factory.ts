import { AbiItem } from 'web3-utils';
import web3 from './web3';
import FootballBetFactory from './build/FootballBetFactory.json';

const instance = new web3.eth.Contract(
  FootballBetFactory.abi as AbiItem[],
  '0xa1166b253C955136023259d464d087eF76D0938A',
);

export default instance;
