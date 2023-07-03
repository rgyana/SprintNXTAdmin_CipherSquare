import { AuthService } from './../../../shared/services/auth.service';
import { ToasterService } from './../../../shared/services/toaster.service';
import { Sweetalert2Service } from './../../../shared/services/sweetalert2.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


  loginForm: any;
  latCoordinates: any;
  lonCoordinates: any;

  constructor(
    private formBuilder: FormBuilder,
    private Swal: Sweetalert2Service,
    private toastr: ToasterService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.fetchUserLocation();
  }


  fetchUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          this.latCoordinates = position.coords.latitude.toFixed(2);
          this.lonCoordinates = position.coords.longitude.toFixed(2);
          this.toastr.showSuccess(
            'User location fetched succesfully',
            'SUCCESS'
          );
        },
        (err) => {
          // console.log(err);
          this.toastr.showError('Denied location access..!', 'ERROR');
        }
      );
    }
  }

  submitLoginForm() {
    if (this.loginForm.valid && this.latCoordinates && this.lonCoordinates) {
      const formData = new FormData();
      formData.append('email', this.loginForm.get('emailId').value);
      formData.append('password', this.loginForm.get('password').value);
      formData.append('latitude', this.latCoordinates);
      formData.append('longitude', this.lonCoordinates);
      this.authService.submitLoginCredentials(
        formData,
        this.loginForm.get('emailId').value
      );
    } else if (!this.loginForm.valid) {
      this.Swal.showErrorMsg('Invalid Login Credentials', 'Error');
    } else if (!(this.latCoordinates && this.lonCoordinates)) {
      this.Swal.showErrorMsg(
        `User Location needed to Login. Please refresh page.`,
        'Error'
      );
    } else {
      this.Swal.showErrorMsg('Something went wrong', 'Error');
    }
  }
}
