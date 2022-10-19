import { contractService } from '../../services';
import * as actionCreators from '../actionCreators';

function fetchFixtureContractAddr(fixtureId: number) {
  return async (dispatch: any) => {
    console.log(`dispatch fetchFixtureContractAddr`);
    dispatch(actionCreators.fetchFixtureContractAddr());

    const result = await contractService.fetchExistingContractForMatch(fixtureId);

    if (result.isLeft()) {
      const error: string = result.value;
      dispatch(actionCreators.fetchFixtureContractAddrFailure(error));
    } else {
      const address = result.value.getValue();
      dispatch(actionCreators.fetchFixtureContractAddrSuccess(fixtureId, address));
    }
  };
}

export default fetchFixtureContractAddr;
