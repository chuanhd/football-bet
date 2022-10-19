import { AxiosError } from 'axios';
import { APIResponse } from '../../../shared/infra/services/APIResponse';
import BaseAPI from '../../../shared/infra/services/BaseAPI';
import apiConfig from '../../../config/api';
import Result from '../../../shared/core/Result';
import { left, right } from '../../../shared/core/Either';
import Match from '../models/match.model';
import MatchDTO from '../dtos/match.dto';
import MatchUtils from '../utils/MatchUtils';

export type FootballAPICommonResponseType<T> = {
  results: number;
  parameters: Record<string, string>;
  paging: {
    current: number;
    total: number;
  };
  response: Array<T>;
};

export interface IFixtureService {
  fetchNextFixtures(numOfFixture: number): Promise<APIResponse<Match[]>>;
}

export class FixtureService extends BaseAPI implements IFixtureService {
  static readonly PremierLeagueId = 39;

  static readonly TargetSeason = 2022;

  async fetchNextFixtures(numOfFixture = 10): Promise<APIResponse<Match[]>> {
    try {
      const header = {
        'X-RapidAPI-Key': apiConfig.apiKey,
        'X-RapidAPI-Host': apiConfig.apiHost,
      };

      const params = {
        league: FixtureService.PremierLeagueId,
        season: FixtureService.TargetSeason,
        next: numOfFixture,
      };

      const response = await this.get<FootballAPICommonResponseType<Match>>('/fixtures', params, header);

      return right(Result.ok<Match[]>(response.data.response.map((match: MatchDTO) => MatchUtils.toViewModel(match))));
    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        return left(err.response.data.message);
      }
      if (err instanceof Error) {
        return left(`Internal error: ${err.message}`);
      }

      return left(`Unknown error!`);
    }
  }
}
