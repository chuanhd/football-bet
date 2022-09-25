import { FixtureGoal, FixtureLeague, FixtureScore, FixtureTwoTeams } from '../models/fixture.model';
import FixtureDTO from './fixture.dto';

export default interface MatchDTO {
  readonly fixture: FixtureDTO;
  readonly league: FixtureLeague;
  readonly teams: FixtureTwoTeams;
  readonly goals: FixtureGoal;
  readonly score: FixtureScore;
}
