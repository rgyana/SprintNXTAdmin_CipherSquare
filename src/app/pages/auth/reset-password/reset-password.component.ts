import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPassward: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.resetPassward = this.formBuilder.group({
      email: [''],
      capcha: ['']
    })

  }

  resetPasswordButton() {
    console.log(this.resetPassward.value);
  }
}
