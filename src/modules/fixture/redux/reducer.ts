import { FixtureAction } from './actionCreators';
import initialFixtureState, { FixtureState } from './states';

import actions, { FixtureActionType } from './actions';
import { ReduxUtils } from '../../../shared/utils/ReduxUtils';
import Match from '../models/match.model';

// eslint-disable-next-line @typescript-eslint/default-param-last
export default function fixture(state: FixtureState = initialFixtureState, action: FixtureAction): FixtureState {
  switch (action.type as FixtureActionType) {
    case actions.FETCHING_NEXT_FIXTURES:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isFetchingNextFixtures'),
        error: '',
      };
    case actions.FETCHING_NEXT_FIXTURES_SUCCESS: {
      const newState = {
        ...state,
        ...ReduxUtils.reportEventStatus('isFetchingNextFixtures', true),
        nextFixtures: action.fixtures as Match[],
      };
      return newState;
    }
    case actions.FETCHING_NEXT_FIXTURES_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isFetchingNextFixtures', false),
        error: action.error as string,
      };
    case actions.FETCHING_FIXTURE_CONTRACT_ADDR:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isFetchingFixtureContractAddr'),
        error: '',
      };
    case actions.FETCHING_FIXTURE_CONTRACT_ADDR_SUCCESS: {
      const { nextFixtures } = state;
      const { address, matchId } = <{ address: string; matchId: number }>action;
      nextFixtures.map((match) => {
        if (match.fixture.id === matchId) {
          return { ...match, fixture: { ...fixture, address } };
        }
        return match;
      });
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isFetchingFixtureContractAddr', true),
        error: '',
        nextFixtures,
      };
    }
    case actions.FETCHING_FIXTURE_CONTRACT_ADDR_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isFetchingFixtureContractAddr', false),
        error: action.error as string,
      };
    case actions.CREATE_FIXTURE_CONTRACT_ADDR:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isCreatingFixtureContractAddr'),
        error: '',
      };
    case actions.CREATE_FIXTURE_CONTRACT_ADDR_SUCCESS:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isCreatingFixtureContractAddr', true),
        error: '',
      };
    case actions.CREATE_FIXTURE_CONTRACT_ADDR_FAILURE:
      return {
        ...state,
        ...ReduxUtils.reportEventStatus('isCreatingFixtureContractAddr', false),
        error: action.error as string,
      };
    default:
      return state;
  }
}
