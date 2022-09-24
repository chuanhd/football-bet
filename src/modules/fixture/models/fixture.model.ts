export type FixturePeriod = {
  first: number;
  second: number;
};

export type FixtureVenue = {
  id: number;
  name: string;
  city: string;
};

export type FixtureStatus = {
  long: string;
  short: string;
  elapsed: number;
};

export type FixtureTeam = {
  id: number;
  name: string;
  logo: string;
  winner: boolean;
};

export type FixtureLeague = {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  reason: number;
  round: string;
};

export type FixtureGoal = {
  home: number;
  away: number;
};

export type FixtureScore = {
  halftime: FixtureGoal;
  fulltime: FixtureGoal;
  extratime: FixtureGoal;
  penalty: FixtureGoal;
};

export default interface Fixture {
  readonly id: number;

  readonly referee?: string;

  readonly timezone: string;

  readonly date: string;

  readonly timestamp: number;

  readonly periods: FixturePeriod;

  readonly venue: FixtureVenue;

  readonly status: FixtureStatus;

  readonly league: FixtureLeague;

  readonly teams: Array<FixtureTeam>;

  readonly goal: FixtureGoal;

  readonly score: FixtureScore;

  // constructor({
  //   id,
  //   timezone,
  //   date,
  //   timestamp,
  //   periods,
  //   venue,
  //   status,
  //   league,
  //   teams,
  //   goal,
  //   score,
  //   referee,
  // }: {
  //   id: number;
  //   timezone: string;
  //   date: string;
  //   timestamp: number;
  //   periods: FixturePeriod;
  //   venue: FixtureVenue;
  //   status: FixtureStatus;
  //   league: FixtureLeague;
  //   teams: Array<FixtureTeam>;
  //   goal: FixtureGoal;
  //   score: FixtureScore;
  //   referee?: string;
  // }) {
  //   this.id = id;
  //   this.timezone = timezone;
  //   this.date = date;
  //   this.timestamp = timestamp;
  //   this.periods = periods;
  //   this.venue = venue;
  //   this.status = status;
  //   this.league = league;
  //   this.teams = teams;
  //   this.goal = goal;
  //   this.score = score;
  //   this.referee = referee;
  // }
}
