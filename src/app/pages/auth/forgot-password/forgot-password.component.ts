import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.required],
      otp: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmNewPassword: ['', Validators.required]
    })

  }

  sendOtpToEmail() {

  }
}
