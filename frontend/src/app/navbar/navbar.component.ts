import { Component } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private AuthService: AuthService){

  }

  logout(){
    this.AuthService.logout()
  }

}
