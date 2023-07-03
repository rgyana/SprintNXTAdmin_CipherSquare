import { Sweetalert2Service } from './../../shared/services/sweetalert2.service';
import { AuthService } from './../../shared/services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { EMPTY, Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private sweetalert2Service: Sweetalert2Service) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // handle request
    let requestMod: HttpRequest<any> = this.addToken(request);

    // call next()
    return next.handle(requestMod).pipe(
      catchError((err: any) => {

        /* If ERROR is UNAUTHORIZED ACCESS */
        if (err.status === 401) {
          console.log(err);
          this.sweetalert2Service.showErrorMsg('Unauthorized Access', 'Error');
          this.authService.logout();
          return EMPTY;
        }

        if (err.status === 500) {
          this.sweetalert2Service.showErrorMsg('Something went wrong', 'Error');
          this.authService.logout();
          return EMPTY;
        }

        /* Throwing an error. */
        return throwError(() => err);

      })
    )
  }


  addToken(request: HttpRequest<any>): HttpRequest<any> {

    const token = this.authService.getToken();

    if (token) {
      request = request.clone({
        headers: request.headers.set(
          'Authorization', 'Bearer' + token
        ),
      });
    }

    return request;
  }
}
