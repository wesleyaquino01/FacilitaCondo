import { Component } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  hide = true;
  valorService: any;

  contaTeste = {
    username: 'teste@teste',
    password: '123'
  }


  formularioLogin = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private localStorageService: LocalStorageService, private router: Router, public jwtHelper: JwtHelperService, private AuthService: AuthService) {
    //   this.getMoradores().subscribe({
    //     next: value => {
    //       this.valorService = value
    //       console.log(value)
    //     },
    //     error: err => console.error('Observable emitted an error: ' + err),
    //     complete: () => console.log('Observable emitted the complete notification')
    //   });
    //
  }

  login() {
    const { username, password } = this.formularioLogin.value;


    // const token = localStorage.getItem('access_token');
    // console.log(this.jwtHelper.getTokenExpirationDate());
    // console.log(token)

    // this.localStorageService.setItem('username', username)
    // this.localStorageService.setItem('password', password)

    // console.log(crypto.randomUUID());


    if (username === this.contaTeste.username && password == this.contaTeste.password) {
      // this.AuthService.isAuthenticated
      this.localStorageService.setItem('isAuthenticated', true)
      this.router.navigate(['pagina-principal'])
    }else {
      console.log('Credenciais inválidas');
      this.localStorageService.setItem('isAuthenticated', false)
    }

  }

}
