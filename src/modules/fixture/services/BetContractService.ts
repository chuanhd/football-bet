import { Contract } from 'web3-eth-contract';
import web3 from '../../../ethereum/web3';
import { right, left } from '../../../shared/core/Either';
import Result from '../../../shared/core/Result';
import { APIResponse } from '../../../shared/infra/services/APIResponse';
import { ContractAddress, ContractAddressForMatch } from '../models/fixture.model';

export interface IBetContractService {
  fetchExistingContractForMatch(matchId: number): Promise<APIResponse<ContractAddress>>;
  createContractForMatch(matchId: number): Promise<APIResponse<void>>;
  fetchDeployedContracts(): Promise<APIResponse<ContractAddressForMatch>>;
}

export class BetContractService implements IBetContractService {
  private betFactoryContract: Contract;

  constructor(contract: Contract) {
    this.betFactoryContract = contract;
  }

  async fetchDeployedContracts(): Promise<APIResponse<ContractAddressForMatch>> {
    try {
      const deployedContracts = await this.betFactoryContract.methods.deployedBets().call();
      return right(Result.ok<ContractAddressForMatch>(deployedContracts));
    } catch (err) {
      if (err instanceof Error) {
        return left(`Internal error: ${err.message}`);
      }

      return left(`Unknown error!`);
    }
  }

  async fetchExistingContractForMatch(matchId: number): Promise<APIResponse<ContractAddress>> {
    console.log(`fetchExistingContractForMatch invoked`);
    try {
      const contractAddress = (await this.betFactoryContract.methods
        .getDeployedBetForMatch(matchId)
        .call()) as ContractAddress;

      console.log(`fetchExistingContractForMatch ${matchId} result: ${contractAddress}`);

      return right(Result.ok<ContractAddress>(contractAddress));
    } catch (err) {
      console.log(`fetchExistingContractForMatch failed with err: ${err}`);
      if (err instanceof Error) {
        return left(`Internal error: ${err.message}`);
      }

      return left(`Unknown error!`);
    }
  }

  async createContractForMatch(matchId: number): Promise<APIResponse<void>> {
    try {
      const accounts = await web3.eth.getAccounts();
      await this.betFactoryContract.methods.createFootballBet(matchId).send({ from: accounts[0] });
      return right(Result.ok<void>());
    } catch (err) {
      if (err instanceof Error) {
        return left(`Internal error: ${err.message}`);
      }

      return left(`Unknown error!`);
    }
  }
}
