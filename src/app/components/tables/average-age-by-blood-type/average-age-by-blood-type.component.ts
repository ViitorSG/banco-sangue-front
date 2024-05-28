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
  selector: 'app-average-age-by-blood-type-table',
  templateUrl: './average-age-by-blood-type.component.html',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatHeaderCell,
    MatCellDef,
    MatCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    MatRow
  ],
  styleUrls: ['./average-age-by-blood-type.component.css']
})
export class AverageAgeByBloodTypeTableComponent implements OnInit {
  displayedColumns: string[] = ['blood_type', 'age_average'];
  dataSource = new MatTableDataSource<any>();

  ngOnInit(): void {
    this.loadAverageAgeByBloodType();
  }

  async loadAverageAgeByBloodType() {
    try {
      const data = await CandidateStatusService.getAverageAgeByBloodType();
      if (data) {
        const dataObject: { [key: string]: number } = {};
        Object.entries(data).forEach(([key, value]) => {
          dataObject[key] = value;
        });
        this.dataSource.data = Object.keys(dataObject).map(blood_type => ({
          blood_type,
          age_average: dataObject[blood_type]
        }));
      } else {
        console.error('Erro ao carregar dados de média de idade por tipo sanguíneo.');
      }
    } catch (error) {
      console.error('Erro ao carregar dados de média de idade por tipo sanguíneo:', error);
    }
  }

}
