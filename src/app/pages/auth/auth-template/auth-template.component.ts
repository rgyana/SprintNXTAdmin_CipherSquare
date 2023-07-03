import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-template',
  templateUrl: './auth-template.component.html',
  styleUrls: ['./auth-template.component.scss']
})
export class AuthTemplateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  topLoginButton() {
    this.router.navigate(['auth/login']);
  }

  topSingupButton() {
    this.router.navigate(['auth/signup'])
  }

}
