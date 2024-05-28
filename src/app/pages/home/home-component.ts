import { Component } from '@angular/core';
import { DefaultNavBarComponent } from "../../components/default-nav-bar/default-nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { DefaultTableComponent } from "../../components/default-table/default-table.component";

@Component({
  selector: 'app-home',
  templateUrl: './home-component.html',
  standalone: true,
  imports: [DefaultNavBarComponent, FooterComponent, DefaultTableComponent],
  styleUrl: './home-component.css'
})
export class HomeComponent {
}
