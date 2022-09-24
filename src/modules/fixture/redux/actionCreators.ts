import actions, { FixtureActionType } from './actions';
import Fixture from '../models/fixture.model';

type FixtureActionPayloadType = Fixture | Fixture[] | string;
export type FixtureAction = { [key: string]: FixtureActionType | FixtureActionPayloadType };

function fetchNextFixtures(): FixtureAction {
  return {
    type: actions.FETCHING_NEXT_FIXTURES,
  };
}

function fetchNextFixturesSuccess(fixtures: Fixture[]): FixtureAction {
  return {
    type: actions.FETCHING_NEXT_FIXTURES_SUCCESS,
    fixtures,
  };
}

function fetchNextFixturesFailure(error: string): FixtureAction {
  return {
    type: actions.FETCHING_NEXT_FIXTURES_FAILURE,
    error,
  };
}

export { fetchNextFixtures, fetchNextFixturesSuccess, fetchNextFixturesFailure };
