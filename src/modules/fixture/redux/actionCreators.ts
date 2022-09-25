import actions, { FixtureActionType } from './actions';
import Match from '../models/match.model';

type FixtureActionPayloadType = Match | Match[] | string;
export type FixtureAction = { [key: string]: FixtureActionType | FixtureActionPayloadType };

function fetchNextFixtures(): FixtureAction {
  return {
    type: actions.FETCHING_NEXT_FIXTURES,
  };
}

function fetchNextFixturesSuccess(matches: Match[]): FixtureAction {
  console.log(`fetchNextFixturesSuccess invoked`);
  return {
    type: actions.FETCHING_NEXT_FIXTURES_SUCCESS,
    fixtures: matches,
  };
}

function fetchNextFixturesFailure(error: string): FixtureAction {
  return {
    type: actions.FETCHING_NEXT_FIXTURES_FAILURE,
    error,
  };
}

export { fetchNextFixtures, fetchNextFixturesSuccess, fetchNextFixturesFailure };
