import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreService } from './store.service';
import { Router } from '@angular/router';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebrequestService {

  constructor(
    private http: HttpClient,
    private store: StoreService,
    private router: Router
  ) { }

  //post method with payload
  postdata(payload: any, path: string): Observable<any> {
    return this.http
      .post<any>(environment.baseurl + path, payload)
      .pipe(retry(0), catchError(this.errorHandler));
  }

  //post method without payload
  postHeaderwithoutpayload(path: any): Observable<any> {
    return this.http
      .post(environment.baseurl + path, null)
      .pipe(retry(0), catchError(this.errorHandler));
  }

  //get method
  getData(path: any): Observable<any> {
    return this.http
      .get(environment.baseurl + path)
      .pipe(retry(0), catchError(this.errorHandler));
  }

  // error handler
  errorHandler(err: any) {
    let error: any = '';
    if (err.error instanceof ErrorEvent) {
      error = err.error.message;
    } else {
      error = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    return throwError(() => error);
  }
}
