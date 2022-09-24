import Fixture from '../models/fixture.model';
import FixtureDTO from '../dtos/fixture.dto';

export default class FixtureUtil {
  public static toViewModel(fixtureDTO: FixtureDTO): Fixture {
    return {
      id: fixtureDTO.id,
      timezone: fixtureDTO.timezone,
      date: fixtureDTO.date,
      timestamp: fixtureDTO.timestamp,
      periods: fixtureDTO.periods,
      venue: fixtureDTO.venue,
      status: fixtureDTO.status,
      league: fixtureDTO.league,
      teams: fixtureDTO.teams,
      goal: fixtureDTO.goal,
      score: fixtureDTO.score,
      referee: fixtureDTO.referee,
    };
  }
}
