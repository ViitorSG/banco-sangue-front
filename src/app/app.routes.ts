import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home-component";
import { routesEnum } from "./core/enums/RoutesEnum";
import { NgModule } from "@angular/core";
import { ReportsPage } from "./pages/reports/reports-page";

export const routes: Routes = [
  {
    path: routesEnum.HOME,
    component: HomeComponent
  },
  {
    path: routesEnum.CANDIDATE_REPORTS,
    component: ReportsPage
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
