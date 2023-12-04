import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

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
