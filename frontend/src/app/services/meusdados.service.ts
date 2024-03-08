import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeusdadosService {

  constructor(private http: HttpClient) { }


  getMeusDados(){
    return this.http.get('http://localhost:5131/')
  }


  // login(username: string, password: string): Observable<any> {
  //   const body = { username, password };
  //   return this.http.post<any>(`${this.apiUrl}/login`, body);
  // }
}
