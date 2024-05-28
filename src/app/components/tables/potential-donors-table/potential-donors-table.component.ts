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
  selector: 'app-potential-donors-by-blood-type-table',
  templateUrl: './potential-donors-table.component.html',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    MatRow
  ],
  styleUrls: ['./potential-donors-table.component.css']
})
export class PotentialDonorsByBloodTypeTableComponent implements OnInit {
  displayedColumns: string[] = ['tipo_sanguineo', 'potenciais_doadores'];
  dataSource = new MatTableDataSource<any>();

  ngOnInit(): void {
    this.loadPotentialDonorsByBloodType();
  }

  async loadPotentialDonorsByBloodType() {
    try {
      const data = await CandidateStatusService.getPotentialDonorsByBloodType();
      if (data) {
        const dataObject: { [key: string]: number } = {};
        Object.entries(data).forEach(([key, value]) => {
          dataObject[key] = value;
        });
        this.dataSource.data = Object.keys(dataObject).map(tipo_sanguineo => ({
          tipo_sanguineo,
          potenciais_doadores: dataObject[tipo_sanguineo]
        }));
      } else {
        console.error('Erro ao carregar dados de potenciais doadores por tipo sanguíneo.');
      }
    } catch (error) {
      console.error('Erro ao carregar dados de potenciais doadores por tipo sanguíneo:', error);
    }
  }

}
