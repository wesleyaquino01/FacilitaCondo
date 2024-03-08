import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5131/';
  loginAutenticado = false;
  constructor(private http: HttpClient, private router: Router, private localStorageService: LocalStorageService) {
  }

  ngOnInit(){
    // this.obterLoginStatus();
  }


  // login(username: string, password: string): Observable<any> {
  //   const body = { username, password };
  //   return this.http.post<any>(`${this.apiUrl}/login`, body);
  // }


  logout(){
    this.router.navigate(['/'])
    // localStorage.removeItem('access_token');
    // localStorage.clear()
  }

  // obterDescricaoLogin = () => this.loginAutenticado ? "Estou Autorizado" : "Não Estou Autorizado";

  get isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return !!token;
  }


  // getMoradores() {
  //   const username = 'Wesley';
  //   const password = '123';
  //   const base64Credentials = btoa(`${username}:${password}`);

  //   const headers = new HttpHeaders({
  //     'Authorization': 'Basic ' + base64Credentials
  //   });

  //   return this.http.get<any>('http://localhost:3000/moradores', { headers });
  // }
}
