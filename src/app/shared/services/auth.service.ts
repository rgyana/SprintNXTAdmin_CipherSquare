import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { StoreService } from './store.service';
import { Sweetalert2Service } from './sweetalert2.service';
import { ToasterService } from './toaster.service';
import { WebrequestService } from './webrequest.service';
import { config } from 'src/app/core/interfaces/api_endpoints';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private router: Router, private webreq: WebrequestService, private store: StoreService, private Swal: Sweetalert2Service, private toastr: ToasterService, private storeService: StoreService) { }

  private isLoginOtpSentSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoginOtpSent$: Observable<boolean> = this.isLoginOtpSentSub.asObservable();

  private userEmailSub: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public userEmail$: Observable<string> = this.userEmailSub.asObservable();

  // Submit Login Credentials
  submitLoginCredentials(formData: FormData, email: string) {
    this.webreq.postdata(formData, config.auth.login).subscribe({
      next: (res) => {
        // console.log(res);
        if ((res?.code === 200 || res?.code === 201) && res?.status) {
          if (res.allwoTwostep == true) {
            this.toastr.showInfo(res.message, 'Info');
            this.userEmailSub.next(email);
            this.isLoginOtpSentSub.next(true);
            this.router.navigate(['/auth/login-otp']);
            // } else {
            // this.store.set('details', res);
            // this.store.set('env', res.userdata.user_env);
            // this.toastr.showSuccess(res.message, 'Success');
            // this.router.navigate(['/kyc']);
          }
        } else {
          this.Swal.showErrorMsg(res?.message, 'Error');
        }
      },
      error: (err) => {
        this.Swal.showErrorMsg(err);
      },
    });
  }

  // Verify OTP
  verifyOtp(userEmail: string, adminOtp: string) {

    const formData = new FormData();
    formData.append('email', userEmail);
    formData.append('otp', adminOtp);

    this.webreq.postdata(formData, config.auth.verifyOtp).subscribe({
      next: (res) => {
        if (res.code === 200 && res.status) {
          this.storeService.set('token', res?.authtoken);
          this.router.navigate(['/kyc']);
        }
      },
    });
  }

  // Get Auth Status
  getAuthStatus(): boolean {
    return this.store.has('token');
  }

  // Send Reset OTP
  sendResetOtp(email: string) { }

  // Logout
  logout() {
    this.store.remove('token');
    this.router.navigate(['/auth/login']);
  }

  getToken() {
    return this.store.get('token');
  }

}
