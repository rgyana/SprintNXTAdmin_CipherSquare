import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isSidebarClosed: boolean = false;

  @Output() sidebarToggleClickEmitter = new EventEmitter<boolean>();

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  onSidebarToggle() {
    this.isSidebarClosed = !this.isSidebarClosed;
    this.sidebarToggleClickEmitter.emit(this.isSidebarClosed);
  }

  logoutButton() {
    this.authService.logout();
  }

}
