import { Sweetalert2Service } from './../../../shared/services/sweetalert2.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-otp',
  templateUrl: './login-otp.component.html',
  styleUrls: ['./login-otp.component.scss'],
})
export class LoginOtpComponent implements OnInit {

  otpInputForm: any;

  // ? using resolver - its automatically getting subscribed by ActivatedRoute.snapshot.data
  userEmail = inject(ActivatedRoute).snapshot.data['userEmail'];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private sweetalert2Service: Sweetalert2Service
  ) { }

  ngOnInit(): void {
    this.otpInputForm = this.formBuilder.group({
      input1: ['', [Validators.required]],
      input2: ['', [Validators.required]],
      input3: ['', [Validators.required]],
      input4: ['', [Validators.required]],
    });
  }

  // focus next
  focusNext(event: any) {
    let element: any;
    if (event.code !== 'Backspace')
      element = event.srcElement.nextElementSibling;

    if (event.code === 'Backspace')
      element = event.srcElement.previousElementSibling;

    if (element == null) return;
    else element.focus();
  }

  verifyOtpButton() {
    if (this.otpInputForm?.valid) {
      const adminOtp =
        this.otpInputForm.value.input1 +
        this.otpInputForm.value.input2 +
        this.otpInputForm.value.input3 +
        this.otpInputForm.value.input4;
      this.authService.verifyOtp(this.userEmail, adminOtp);
    }
    else {
      this.sweetalert2Service.showErrorMsg("Please enter OTP", "Error");
    }
  }
}
