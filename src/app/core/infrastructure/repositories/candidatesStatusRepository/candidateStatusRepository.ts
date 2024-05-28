import { DefaultRepositoryApi } from '../defaultRepositoryApi';
import { EndPointsEnum } from "../../../enums/EndPointsEnum";

export class CandidateStatusRepository extends DefaultRepositoryApi {
  async getCountByState(): Promise<Map<string, number> | undefined> {
    const endpoint = EndPointsEnum.CANDIDATE_STATUS_COUNT_BY_STATE;
    const response = await this.api.get<Map<string, number>>(endpoint);
    return this.formalizeResponse(response);
  }

  async getAverageImcByAgeRange(): Promise<Map<string, number> | undefined> {
    const endpoint = EndPointsEnum.CANDIDATE_STATUS_IMC_BY_AGE_RANGE;
    const response = await this.api.get<Map<string, number>>(endpoint);
    return this.formalizeResponse(response);
  }

  async getObesityPercentageByGender(): Promise<Map<string, number> | undefined> {
    const endpoint = EndPointsEnum.CANDIDATE_STATUS_OBESITY_PERCENTAGE_BY_GENDER;
    const response = await this.api.get<Map<string, number>>(endpoint);
    return this.formalizeResponse(response);
  }

  async getAverageAgeByBloodType(): Promise<Map<string, number> | undefined> {
    const endpoint = EndPointsEnum.CANDIDATE_STATUS_AVERAGE_AGE_BY_BLOOD_TYPE;
    const response = await this.api.get<Map<string, number>>(endpoint);
    return this.formalizeResponse(response);
  }

  async getPotentialDonorsByBloodType(): Promise<Map<string, number> | undefined> {
    const endpoint = EndPointsEnum.CANDIDATE_STATUS_POTENTIAL_DONORS_BY_BLOOD_TYPE;
    const response = await this.api.get<Map<string, number>>(endpoint);
    return this.formalizeResponse(response);
  }
}
