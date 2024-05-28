import { Component, OnInit } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import { CandidateStatusService } from "../../../core/service/candidatesStatusService/candidatesStatusService";

@Component({
  selector: 'app-obesity-percentage-by-gender-table',
  templateUrl: './obesity-percentage-table.component.html',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    MatCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    MatRow
  ],
  styleUrls: ['./obesity-percentage-table.component.css']
})
export class ObesityPercentageByGenderTableComponent implements OnInit {
  displayedColumns: string[] = ['genero', 'porcentagem_obesidade'];
  dataSource = new MatTableDataSource<any>();

  ngOnInit(): void {
    this.loadObesityPercentageByGender();
  }

  async loadObesityPercentageByGender() {
    try {
      const data = await CandidateStatusService.getObesityPercentageByGender();
      if (data) {
        const dataObject: { [key: string]: number } = {};
        Object.entries(data).forEach(([key, value]) => {
          dataObject[key] = value;
        });
        this.dataSource.data = Object.keys(dataObject).map(genero => ({
          genero,
          porcentagem_obesidade: dataObject[genero]
        }));
      } else {
        console.error('Erro ao carregar dados de porcentagem de obesidade por gênero.');
      }
    } catch (error) {
      console.error('Erro ao carregar dados de porcentagem de obesidade por gênero:', error);
    }
  }
}
