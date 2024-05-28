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
} from "@angular/material/table";
import { CandidateStatusService } from "../../../core/service/candidatesStatusService/candidatesStatusService";

@Component({
  selector: 'app-count-by-state-table',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatCellDef,
    MatHeaderCellDef
  ],
  templateUrl: './count-by-state-table.component.html',
  styleUrl: './count-by-state-table.component.css'
})
export class ContByStateTableComponent implements OnInit {
  displayedColumns: string[] = ['estado', 'candidatos'];
  dataSource = new MatTableDataSource<any>();

  ngOnInit(): void {
    this.loadCountByState();
  }

  async loadCountByState() {
    try {
      const data = await CandidateStatusService.getCountByState();
      console.log('data', data);
      if (data) {
        const dataObject: { [key: string]: number } = {};
        Object.entries(data).forEach(([key, value]) => {
          dataObject[key] = value;
        });
        console.log(dataObject);
        this.dataSource.data = Object.keys(dataObject).map(estado => ({ estado, candidatos: dataObject[estado] }));
      } else {
        console.error('Erro ao carregar dados de contagem por estado.');
      }
    } catch (error) {
      console.error('Erro ao carregar dados de contagem por estado:', error);
    }
  }

}