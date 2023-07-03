import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardTemplateComponent } from './dashboard-template/dashboard-template.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';


@NgModule({
  declarations: [
    DashboardTemplateComponent,
    DashboardHomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule
  ]
})
export class DashboardModule { }
