import actions, { FixtureActionType } from './actions';
import Match from '../models/match.model';

type FixtureActionPayloadType = Match | Match[] | string | number;
export type FixtureAction = { [key: string]: FixtureActionType | FixtureActionPayloadType };

function fetchNextFixtures(): FixtureAction {
  return {
    type: actions.FETCHING_NEXT_FIXTURES,
  };
}

function fetchNextFixturesSuccess(matches: Match[]): FixtureAction {
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

function fetchFixtureContractAddr(): FixtureAction {
  return {
    type: actions.FETCHING_FIXTURE_CONTRACT_ADDR,
  };
}

function fetchFixtureContractAddrSuccess(matchId: number, address: string): FixtureAction {
  return {
    type: actions.FETCHING_FIXTURE_CONTRACT_ADDR_SUCCESS,
    matchId,
    address,
  };
}

function fetchFixtureContractAddrFailure(error: string): FixtureAction {
  return {
    type: actions.FETCHING_FIXTURE_CONTRACT_ADDR_FAILURE,
    error,
  };
}

function createFixtureContractAddr(): FixtureAction {
  return {
    type: actions.CREATE_FIXTURE_CONTRACT_ADDR,
  };
}

function createFixtureContractAddrSuccess(matchId: number): FixtureAction {
  return {
    type: actions.CREATE_FIXTURE_CONTRACT_ADDR_SUCCESS,
    matchId,
  };
}

function createFixtureContractAddrFailure(error: string): FixtureAction {
  return {
    type: actions.CREATE_FIXTURE_CONTRACT_ADDR_FAILURE,
    error,
  };
}

export {
  fetchNextFixtures,
  fetchNextFixturesSuccess,
  fetchNextFixturesFailure,
  fetchFixtureContractAddr,
  fetchFixtureContractAddrSuccess,
  fetchFixtureContractAddrFailure,
  createFixtureContractAddr,
  createFixtureContractAddrSuccess,
  createFixtureContractAddrFailure,
};
