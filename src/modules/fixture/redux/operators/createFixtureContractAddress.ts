import { contractService } from '../../services';
import * as actionCreators from '../actionCreators';
import fetchFixtureContractAddr from './fetchFixtureContractAddress';

function createFixtureContractAddr(fixtureId: number) {
  return async (dispatch: any) => {
    dispatch(actionCreators.createFixtureContractAddr());

    const result = await contractService.createContractForMatch(fixtureId);
    console.log(`createFixtureContractAddr isLeft: ${result.isLeft()}`);
    if (result.isLeft()) {
      const error: string = result.value;
      dispatch(actionCreators.createFixtureContractAddrFailure(error));
    } else {
      dispatch(fetchFixtureContractAddr(fixtureId));
      dispatch(actionCreators.createFixtureContractAddrSuccess(fixtureId));
    }
  };
}

export default createFixtureContractAddr;
