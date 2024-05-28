import { StringsPtBR } from './strings_pt_br';

export class Localization {
  private static strings: Strings = Localization.getType();

  private static getType<T extends Strings>(): T {
    return new StringsPtBR() as T;
  }

  static getStrings(): Strings {
    return this.strings;
  }
}

export interface Strings {
  genericError: string;
  genericErrorClient: string;
  genericErrorServer: string;
  logoAltText: string;
  logoText: string;
  projectName: string;
  addFileButtonText: string;
  deleteAllCandidatesButtonText: string;
}
