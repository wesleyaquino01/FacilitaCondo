import { Component } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators} from '@angular/forms';

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
    username: new FormControl('' , Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private localStorageService: LocalStorageService, private router: Router) {
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
    const username = this.formularioLogin.value.username;
    const password = this.formularioLogin.value.password;

    // this.localStorageService.setItem('username', username)
    // this.localStorageService.setItem('password', password)

    // console.log(crypto.randomUUID());

    JSON.stringify(username)
    JSON.stringify(password)

    if(password == this.contaTeste.password)
      this.localStorageService.setItem('token', '1')
      this.router.navigate(['pagina-principal'])
    }

}
