import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = 'https://localhost:5001/api/login';

  constructor(private http: HttpClient) { }

  authenticate(login: string, pwd: string): Observable<boolean> {
    return this.http.post<boolean>(this.url, { login, pwd }, { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') });
    
  }
}
