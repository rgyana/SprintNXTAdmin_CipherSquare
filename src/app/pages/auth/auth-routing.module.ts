import { NgModule, inject } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthTemplateComponent } from './auth-template/auth-template.component';
import { LoginComponent } from './login/login.component';
import { LoginOtpComponent } from './login-otp/login-otp.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { loginOtpGuard } from 'src/app/core/guards/login-otp-guard';
import { AuthService } from 'src/app/shared/services/auth.service';
import { map } from 'rxjs';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: AuthTemplateComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'login-otp',
        canActivate: [loginOtpGuard],
        // canActivate: [() => {
        //   return inject(AuthService).isLoginOtpSent$.pipe(
        //     map(isApproved => {
        //       if (!isApproved) {
        //         inject(Router).navigate(['/auth/login']);
        //         return false;
        //       }
        //       return true
        //     })
        //   );
        // }],
        resolve: {
          userEmail: () => inject(AuthService).userEmail$,
        },
        component: LoginOtpComponent,
      },
      {
        path: 'signup',
        component: SignUpComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
