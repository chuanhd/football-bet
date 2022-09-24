import fetchNextFixtures from './fetchNextFixtures';

export interface IFixtureOperations {
  fetchNextFixtures(numOfNextFixture: number): void;
}

export { fetchNextFixtures };
