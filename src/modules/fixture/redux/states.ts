import Match from '../models/match.model';

export interface FixtureState {
  isFetchingNextFixtures: boolean;
  isFetchingNextFixturesSuccess: boolean;
  isFetchingNextFixturesFailure: boolean;

  nextFixtures: Match[];

  error: string;
}

const initialFixtureState: FixtureState = {
  isFetchingNextFixtures: false,
  isFetchingNextFixturesSuccess: false,
  isFetchingNextFixturesFailure: false,

  nextFixtures: [],

  error: '',
};

export default initialFixtureState;
