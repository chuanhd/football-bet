import { fixtureService } from '../../services';
import * as actionCreators from '../actionCreators';

function fetchNextFixtures(numOfNextFixtures = 10) {
  return async (dispatch: any) => {
    dispatch(actionCreators.fetchNextFixtures());

    const result = await fixtureService.fetchNextFixtures(numOfNextFixtures);

    if (result.isLeft()) {
      const error: string = result.value;
      dispatch(actionCreators.fetchNextFixturesFailure(error));
    } else {
      const fixtures = result.value.getValue();
      dispatch(actionCreators.fetchNextFixturesSuccess(fixtures));
    }
  };
}

export default fetchNextFixtures;
