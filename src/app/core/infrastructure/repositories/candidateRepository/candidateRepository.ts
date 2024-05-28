import { DefaultRepositoryApi } from '../defaultRepositoryApi';
import { CandidateModel } from "../../../models/candidate-model";
import { EndPointsEnum } from "../../../enums/EndPointsEnum";

export class CandidateRepository extends DefaultRepositoryApi {
  async getAllCandidates(): Promise<CandidateModel[] | undefined> {
    const endpoint = EndPointsEnum.CANDIDATE;
    const response = await this.api.get<CandidateModel[]>(endpoint);
    return this.formalizeResponse(response);
  }

  async createCandidates(file: File): Promise<void | undefined> {
    const formData = new FormData();
    formData.append('file', file);

    const endpoint = EndPointsEnum.CANDIDATE;
    const response = await this.api.post<void>(endpoint, formData);
    return this.formalizeResponse(response);
  }

  async updateCandidates(candidatesData: CandidateModel[]): Promise<void | undefined> {
    const endpoint = EndPointsEnum.CANDIDATE;
    const response = await this.api.put<void>(endpoint, candidatesData);
    return this.formalizeResponse(response);
  }

  async deleteAllCandidates(): Promise<void | undefined> {
    const endpoint = EndPointsEnum.CANDIDATE;
    const response = await this.api.delete<void>(endpoint);
    return this.formalizeResponse(response);
  }
}
