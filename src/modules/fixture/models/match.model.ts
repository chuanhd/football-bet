import Fixture, { FixtureGoal, FixtureLeague, FixtureScore, FixtureTwoTeams } from './fixture.model';

export default interface Match {
  readonly fixture: Fixture;
  readonly league: FixtureLeague;
  readonly teams: FixtureTwoTeams;
  readonly goals: FixtureGoal;
  readonly score: FixtureScore;
}
