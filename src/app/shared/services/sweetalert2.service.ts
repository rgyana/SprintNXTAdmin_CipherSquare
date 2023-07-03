import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class Sweetalert2Service {

  constructor() { }

  arr: any = []

  alertMessage(statuscode?: any, message?: string) {
    if (statuscode == 200) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500
      });
    }
    else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: message,
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  errorMessage(data?: any) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: data,
    })
  }

  errorMessageforform(data?: any) {
    this.arr = [];
    for (const property in data) {
      this.arr.push(data[property]);
    }
    console.log(this.arr)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      html: this.arr.toString().replace(',', '</br>'),
    })
  }


  showSuccessMsg(message?: string, heading = 'Success') {
    Swal.fire({
      title: heading,
      text: message,
      position: 'center',
      icon: 'success',
      showCloseButton: false,
      timer: 2000
    })
  }

  showErrorMsg(message?: string, heading = 'Oops..') {
    Swal.fire({
      title: heading,
      text: message,
      position: 'center',
      icon: 'error',
      showCloseButton: false,
      timer: 2000
    })
  }


}
