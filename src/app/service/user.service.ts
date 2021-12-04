import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

AUTh_api='http://localhost:3000/';

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any>{
    return this.http.post(this.AUTh_api+'signup',user, this.httpOptions);
  }

  login(user: User): Observable<any>{
    return this.http.get(this.AUTh_api+'users/login',this.httpOptions);
  }


}
