import Fixture from '../models/fixture.model';

export interface FixtureState {
  isFetchingNextFixtures: boolean;
  isFetchingNextFixturesSuccess: boolean;
  isFetchingNextFixturesFailure: boolean;

  nextFixtures: Fixture[];

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
