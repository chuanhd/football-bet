import { AxiosError } from 'axios';
import { APIResponse } from '../../../shared/infra/services/APIResponse';
import BaseAPI from '../../../shared/infra/services/BaseAPI';
import Fixture from '../models/fixture.model';
import FixtureDTO from '../dtos/fixture.dto';
import apiConfig from '../../../config/api';
import FixtureUtil from '../utils/FixtureUtil';
import Result from '../../../shared/core/Result';
import { left, right } from '../../../shared/core/Either';

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
  fetchNextFixtures(numOfFixture: number): Promise<APIResponse<Fixture[]>>;
}

export class FixtureService extends BaseAPI implements IFixtureService {
  static readonly PremierLeagueId = 39;

  static readonly TargetSeason = 2022;

  async fetchNextFixtures(numOfFixture = 10): Promise<APIResponse<Fixture[]>> {
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

      const response = await this.get<FootballAPICommonResponseType<Fixture>>('/fixtures', params, header);

      return right(
        Result.ok<Fixture[]>(response.data.response.map((fixture: FixtureDTO) => FixtureUtil.toViewModel(fixture))),
      );
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
