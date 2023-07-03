import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardTemplateComponent } from './dashboard-template/dashboard-template.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardTemplateComponent,
    children: [
      {
        path: 'home',
        component: DashboardHomeComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
