import MatchDTO from '../dtos/match.dto';
import Match from '../models/match.model';
import FixtureUtil from './FixtureUtil';

export default class MatchUtils {
  public static toViewModel(matchDTO: MatchDTO): Match {
    return {
      fixture: FixtureUtil.toViewModel(matchDTO.fixture),
      league: matchDTO.league,
      teams: matchDTO.teams,
      goals: matchDTO.goals,
      score: matchDTO.score,
    };
  }
}
