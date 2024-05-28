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
  selector: 'app-average-imc-age-table',
  templateUrl: './average-imc-age-table.component.html',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCellDef,
    MatCell,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatHeaderRow,
    MatRowDef,
    MatRow
  ],
  styleUrls: ['./average-imc-age-table.component.css']
})
export class AverageImcAgeTableComponent implements OnInit {
  displayedColumns: string[] = ['candidate_age', 'average_imc'];
  dataSource = new MatTableDataSource<any>();

  ngOnInit(): void {
    this.loadAverageImcByAgeRange();
  }

  async loadAverageImcByAgeRange() {
    try {
      const data = await CandidateStatusService.getAverageImcByAgeRange();
      if (data) {
        const dataObject: { [key: string]: number } = {};
        Object.entries(data).forEach(([key, value]) => {
          dataObject[key] = value;
        });
        this.dataSource.data = Object.keys(dataObject).map(candidate_age => ({
          candidate_age,
          average_imc: dataObject[candidate_age]
        }));
      } else {
        console.error('Erro ao carregar dados de média de IMC por faixa etária');
      }
    } catch (error) {
      console.error('Erro ao carregar dados de média de IMC por faixa etária:', error);
    }
  }


}
