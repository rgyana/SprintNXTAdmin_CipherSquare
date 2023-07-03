import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KycRoutingModule } from './kyc-routing.module';
import { KycTemplateComponent } from './kyc-template/kyc-template.component';
import { KycHomeComponent } from './kyc-home/kyc-home.component';
import { LayoutModule } from 'src/app/layout/layout.module';


@NgModule({
  declarations: [
    KycTemplateComponent,
    KycHomeComponent
  ],
  imports: [
    CommonModule,
    KycRoutingModule,
    LayoutModule
  ]
})
export class KycModule { }
