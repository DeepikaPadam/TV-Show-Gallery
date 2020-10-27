import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';
const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full', component: DashboardComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details', component: DisplayDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
