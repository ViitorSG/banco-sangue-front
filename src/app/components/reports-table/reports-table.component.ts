import { Component } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { NgForOf, NgIf } from "@angular/common";
import { ContByStateTableComponent } from "../tables/count-by-state-table/cont-by-state-table.component";
import {
  ObesityPercentageByGenderTableComponent
} from "../tables/obesity-percentage-table/obesity-percentage-table.component";
import {
  PotentialDonorsByBloodTypeTableComponent
} from "../tables/potential-donors-table/potential-donors-table.component";
import {
  AverageAgeByBloodTypeTableComponent
} from "../tables/average-age-by-blood-type/average-age-by-blood-type.component";
import { AverageImcAgeTableComponent } from "../tables/average-imc-age-table/average-imc-age-table.component";

interface response {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reports-table',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, NgForOf, ContByStateTableComponent, AverageAgeByBloodTypeTableComponent, ObesityPercentageByGenderTableComponent, PotentialDonorsByBloodTypeTableComponent, NgIf, AverageAgeByBloodTypeTableComponent, AverageAgeByBloodTypeTableComponent, AverageAgeByBloodTypeTableComponent, AverageAgeByBloodTypeTableComponent, AverageImcAgeTableComponent],
  templateUrl: './reports-table.component.html',
  styleUrl: './reports-table.component.css'
})
export class ReportsTableComponent {
  defaultValue: string = 'defaulf';
  selectedReport: string = '';

  onChange(event: any) {
    this.selectedReport = event.target.value;
    this.defaultValue = event.target.value;

    console.log(this.selectedReport)
  }

  reports: response[] = [
    {value: 'defaulf', viewValue: 'selecionar um '},
    {value: 'candidatesByState', viewValue: 'Candidatos por estado'},
    {value: 'averageAgeByBloodType', viewValue: 'Média de idade por tipo sanguíneo'},
    {value: 'imcByAgeRange', viewValue: 'Média de IMC por idade'},
    {value: 'obesityPercentage', viewValue: 'Porcentual de obesidade por gênero'},
    {value: 'potentialDonors', viewValue: 'Potenciais doadores por tipo sanguíneo'},
  ];
}


