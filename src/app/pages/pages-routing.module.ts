import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../core/guards/auth-guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'dashboard',
    // canActivate: [authGuard],
    // ? here canMatch wouldnot the load the lazy-load-module.js on routing until canMatch is true, but canActivate will load the lazy-load-module.js even if the canActivate is false. check in network inspect tab
    canMatch: [authGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'kyc',
    // canActivate: [authGuard],
    // ? here canMatch wouldnot the load the lazy-load-module.js on routing until canMatch is true, but canActivate will load the lazy-load-module.js even if the canActivate is false. check in network inspect tab
    canMatch: [authGuard],
    loadChildren: () => import('./kyc/kyc.module').then((m) => m.KycModule)
  },

  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
