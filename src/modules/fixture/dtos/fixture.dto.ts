import { FixturePeriod, FixtureVenue, FixtureStatus } from '../models/fixture.model';

export default interface FixtureDTO {
  readonly id: number;

  readonly referee?: string;

  readonly timezone: string;

  readonly date: string;

  readonly timestamp: number;

  readonly periods: FixturePeriod;

  readonly venue: FixtureVenue;

  readonly status: FixtureStatus;
}
