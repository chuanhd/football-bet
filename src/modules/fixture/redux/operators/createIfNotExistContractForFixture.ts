import * as actionCreators from '../actionCreators';
import { contractService } from '../../services';
import createFixtureContractAddr from './createFixtureContractAddress';

const createIfNotExistContractForFixtures = (fixtureId: number) => async (dispatch: any) => {
  dispatch(actionCreators.fetchFixtureContractAddr());

  const result = await contractService.fetchExistingContractForMatch(fixtureId);

  if (result.isLeft()) {
    const error: string = result.value;
    dispatch(actionCreators.fetchFixtureContractAddrFailure(error));
  } else {
    const address = result.value.getValue();
    if (Number(address) === 0) {
      console.log(`Contract for match ${fixtureId} has not been created. We need to create it`);
      dispatch(createFixtureContractAddr(fixtureId));
    }
    dispatch(actionCreators.fetchFixtureContractAddrSuccess(fixtureId, address));
  }
};

export default createIfNotExistContractForFixtures;
