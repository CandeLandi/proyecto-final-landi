import { Component } from '@angular/core';
import { AuthService } from '../../../layouts/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private authService: AuthService) {

  }

  logout() {
    this.authService.logout()
  }
}
