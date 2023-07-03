import { Component } from '@angular/core';

@Component({
  selector: 'app-kyc-template',
  templateUrl: './kyc-template.component.html',
  styleUrls: ['./kyc-template.component.scss']
})
export class KycTemplateComponent {

  isSidebarClosed: boolean = false;

  constructor() { }

  fetchSidebarToggleBtnClickValue(isSidebarClosedVal: boolean) {
    this.isSidebarClosed = isSidebarClosedVal;
  }

}
