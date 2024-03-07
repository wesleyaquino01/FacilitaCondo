import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://api.example.com';
  loginAutenticado = false;
  constructor(private http: HttpClient, private router: Router, private localStorageService: LocalStorageService) {
  }

  ngOnInit(){
    this.obterLoginStatus();
  }

  obterLoginStatus(){
    this.loginAutenticado = !!localStorage.getItem("login");
  }

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post<any>(`${this.apiUrl}/login`, body);
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  // get isAuthenticated(): boolean {
  //   const token = localStorage.getItem('access_token');
  //   return !!token;
  // }

  getToken(): boolean {
    const token = localStorage.getItem('access_token');
    return !!token;
  }


  deslogar(){
    this.localStorageService.removeItem('token')
    this.router.navigate(['/'])
  }

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
