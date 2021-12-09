import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../model/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  consultarTodo(): Observable<any>{
    return this.http.get('empleados');
  }

  crear(empleado: Empleado): Observable<any>{
    return this.http.post('empleados',empleado);
  }

  eliminar(id:string): Observable<any>{
    return this.http.delete('empleados/'+id);
  }

  modificar(empleado: Empleado): Observable<any>{
    return this.http.put('empleados', empleado);
  }


}
