import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthTemplateComponent } from './auth-template/auth-template.component';
import { LoginComponent } from './login/login.component';
import { LoginOtpComponent } from './login-otp/login-otp.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component'


@NgModule({
  declarations: [
    AuthTemplateComponent,
    LoginComponent,
    LoginOtpComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
