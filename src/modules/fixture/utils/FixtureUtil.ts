import format from 'date-fns/format';
import Fixture from '../models/fixture.model';
import FixtureDTO from '../dtos/fixture.dto';

export default class FixtureUtil {
  public static toViewModel(fixtureDTO: FixtureDTO): Fixture {
    return {
      id: fixtureDTO.id,
      timezone: fixtureDTO.timezone,
      date: format(fixtureDTO.timestamp, 'MMM do yyyy'),
      hour: format(fixtureDTO.timestamp, 'p'),
      timestamp: fixtureDTO.timestamp,
      periods: fixtureDTO.periods,
      venue: fixtureDTO.venue,
      status: fixtureDTO.status,
      referee: fixtureDTO.referee,
    };
  }
}
