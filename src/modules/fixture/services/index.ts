import { BetContractService } from './BetContractService';
import { FixtureService } from './FixtureService';
import factory from '../../../ethereum/factory';

const fixtureService = new FixtureService();
const contractService = new BetContractService(factory);

export { fixtureService, contractService };
