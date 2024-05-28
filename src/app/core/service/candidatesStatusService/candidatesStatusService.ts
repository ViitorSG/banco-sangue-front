import { Injectable } from "@angular/core";
import {
  CandidateStatusRepository
} from "../../infrastructure/repositories/candidatesStatusRepository/candidateStatusRepository";

@Injectable({
  providedIn: 'root'
})
export class CandidateStatusService {

  static async getCountByState(): Promise<Map<string, number> | undefined> {
    const candidateStatusRepository = new CandidateStatusRepository();
    return await candidateStatusRepository.getCountByState();
  }

  static async getAverageImcByAgeRange(): Promise<Map<string, number> | undefined> {
    const candidateStatusRepository = new CandidateStatusRepository();
    return await candidateStatusRepository.getAverageImcByAgeRange();
  }

  static async getObesityPercentageByGender(): Promise<Map<string, number> | undefined> {
    const candidateStatusRepository = new CandidateStatusRepository();
    return await candidateStatusRepository.getObesityPercentageByGender();
  }

  static async getAverageAgeByBloodType(): Promise<Map<string, number> | undefined> {
    const candidateStatusRepository = new CandidateStatusRepository();
    return await candidateStatusRepository.getAverageAgeByBloodType();
  }

  static async getPotentialDonorsByBloodType(): Promise<Map<string, number> | undefined> {
    const candidateStatusRepository = new CandidateStatusRepository();
    return await candidateStatusRepository.getPotentialDonorsByBloodType();
  }
}
