import { FixtureAction } from './actionCreators';
import initialFixtureState, { FixtureState } from './states';

import actions, { FixtureActionType } from './actions';
import { ReduxUtils } from '../../../shared/utils/ReduxUtils';
import Fixture from '../models/fixture.model';

// eslint-disable-next-line @typescript-eslint/default-param-last
export default function fixture(state: FixtureState = initialFixtureState, action: FixtureAction): FixtureState {
  switch (action.type as FixtureActionType) {
    case actions.FETCHING_NEXT_FIXTURES:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isFetchingNextFixtures'),
        error: '',
      };
    case actions.FETCHING_NEXT_FIXTURES_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isFetchingNextFixtures', true),
        nextFixtures: action.fixtures as Fixture[],
      };
    case actions.FETCHING_NEXT_FIXTURES_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isFetchingNextFixtures', false),
        error: action.error as string,
      };
    default:
      return state;
  }
}
