import { Injectable } from "@angular/core";
import { CandidateModel } from "../../models/candidate-model";
import { Pageable } from "../../models/CommonModel";
import { CandidateRepository } from "../../infrastructure/repositories/candidateRepository/candidateRepository";

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  static async getCandidates(pageable?: Pageable, querySearch?: string): Promise<CandidateModel[] | undefined> {
    const candidateRepository = new CandidateRepository();
    return await candidateRepository.getAllCandidates();
  }

  static async createCandidates(file: File): Promise<void | undefined> {
    const candidateRepository = new CandidateRepository();
    return await candidateRepository.createCandidates(file);
  }

  static async deleteAllCandidates(): Promise<void | undefined> {
    const candidateRepository = new CandidateRepository();
    return await candidateRepository.deleteAllCandidates();
  }
}
