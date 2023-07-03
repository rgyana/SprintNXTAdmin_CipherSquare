import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KycTemplateComponent } from './kyc-template/kyc-template.component';
import { KycHomeComponent } from './kyc-home/kyc-home.component';

const routes: Routes = [
  {
    path: '',
    component: KycTemplateComponent,
    children: [
      {
        path: 'home',
        component: KycHomeComponent,
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
export class KycRoutingModule { }
