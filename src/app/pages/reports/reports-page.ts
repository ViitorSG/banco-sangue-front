import { Component } from '@angular/core';
import { DefaultNavBarComponent } from "../../components/default-nav-bar/default-nav-bar.component";
import { DefaultTableComponent } from "../../components/default-table/default-table.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ReportsTableComponent } from "../../components/reports-table/reports-table.component";

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    DefaultNavBarComponent,
    DefaultTableComponent,
    FooterComponent,
    ReportsTableComponent
  ],
  templateUrl: './reports-page.html',
  styleUrl: './reports-page.css'
})
export class ReportsPage {

}
