import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
  MatTableDataSource, MatTableModule
} from "@angular/material/table";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import {MatInputModule} from '@angular/material/input';
import { MatIcon } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";
import { Localization } from "../../core/translations/strings";
import { CandidateService } from "../../core/service/candidateService/candidateService";

@Component({
  selector: 'app-default-table',
  templateUrl: './default-table.component.html',
  styleUrls: ['./default-table.component.css'],
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderRow,
    MatRow,
    MatPaginator,
    MatTableModule,
    MatPaginatorModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatIcon,
    MatButton,
  ]
})
export class DefaultTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  strings = Localization.getStrings();
  displayedColumns: string[] = [
    'nome', 'cpf', 'rg', 'data_nasc', 'sexo', 'mae', 'pai', 'email',
    'cep', 'endereco', 'numero', 'bairro', 'cidade', 'estado',
    'telefone_fixo', 'celular', 'altura', 'peso', 'tipo_sanguineo', 'age'
  ];
  dataSource = new MatTableDataSource();

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getCandidates();
  }

  ngOnInit() {
    this.getCandidates();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onDeleteAllCandidates() {
    if (confirm('Tem certeza que deseja excluir todos os candidatos?')) {
      CandidateService.deleteAllCandidates().then(() => {
        this.getCandidates();
      }).catch((error: any) => {
        console.error('Ocorreu um erro ao excluir todos os candidatos:', error);
      });
    }
  }

  async getCandidates() {
    try {
      const candidates = await CandidateService.getCandidates();
      if (candidates) {
        this.dataSource.data = candidates;
      } else {
        console.error('Error fetching candidates');
      }
    } catch (error) {
      console.error('Error fetching candidates', error);
    }
  }
}
