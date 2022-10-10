import fetchNextFixtures from './fetchNextFixtures';
import fetchFixtureContractAddr from './fetchFixtureContractAddress';
import createFixtureContractAddr from './createFixtureContractAddress';
import createIfNotExistContractForFixtures from './createIfNotExistContractForFixture';

export interface IFixtureOperations {
  fetchNextFixtures(numOfNextFixture: number): void;
  fetchFixtureContractAddr(fixtureId: number): void;
  createFixtureContractAddr(fixtureId: number): void;
  createIfNotExistContractForFixtures(fixtureId: number): void;
}

export { fetchNextFixtures, fetchFixtureContractAddr, createFixtureContractAddr, createIfNotExistContractForFixtures };
