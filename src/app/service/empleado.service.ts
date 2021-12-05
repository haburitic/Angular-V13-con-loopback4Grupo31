import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../model/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {





  constructor(private http: HttpClient) { }

  crear(empleado: Empleado): Observable<any>{
    return this.http.post('signup',empleado);
  }

  eliminar(empleado: Empleado): Observable<any>{
    return this.http.get('users/login');
  }

  ping(){
    return this.http.get('ping');

  }
}
