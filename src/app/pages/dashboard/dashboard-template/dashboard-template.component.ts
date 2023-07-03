import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard-template',
  templateUrl: './dashboard-template.component.html',
  styleUrls: ['./dashboard-template.component.scss']
})
export class DashboardTemplateComponent implements OnInit {


  isSidebarClosed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  fetchSidebarToggleBtnClickValue(isSidebarClosedVal: boolean) {
    this.isSidebarClosed = isSidebarClosedVal;
  }

}
