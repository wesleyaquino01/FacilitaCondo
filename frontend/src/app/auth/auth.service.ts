import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginAutenticado = false;
  constructor(private http: HttpClient) {
  }

  ngOnInit(){
    this.obterLoginStatus();
  }

  obterLoginStatus(){
    this.loginAutenticado = !!localStorage.getItem("login");
  }


  // deslogar(){

  // }

  obterDescricaoLogin = () => this.loginAutenticado ? "Estou Autorizado" : "Não Estou Autorizado";

  // loginClick(){
  //   if(this.loginAutenticado){
  //     localStorage.clear()
  //   }else{
  //     localStorage.setItem("login", "sim")
  //   }
  //   this.obterLoginStatus();
  // }


  getMoradores() {
    const username = 'Wesley';
    const password = '123';
    const base64Credentials = btoa(`${username}:${password}`);

    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + base64Credentials
    });

    return this.http.get<any>('http://localhost:3000/moradores', { headers });
  }
}
