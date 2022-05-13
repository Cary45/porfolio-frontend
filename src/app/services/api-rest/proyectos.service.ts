import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

    constructor(private http: HttpClient) {

  }

  getById(id: number): Observable<any> {
	  return this.http.get(`http://comunidad-apirest.herokuapp.com/api/proyectos/${id}`);
	}
  getAll(): Observable<any> {
	  return this.http.get(`http://comunidad-apirest.herokuapp.com/api/proyectos/`);
	}
  //terminar en algun momento
  update(id: number, proyecto: any): Observable<any>{
    return this.http.put(`http://comunidad-apirest.herokuapp.com/api/proyectos/${id}`, proyecto);
  }

  //terminar en algun momento
  delete(id: number): Observable<any>{
    return this.http.delete(`http://comunidad-apirest.herokuapp.com/api/proyectos/${id}`);
  }
 save(proyecto:any) : Observable<any>{
   return this.http.post(`http://comunidad-apirest.herokuapp.com/api/proyectos/`, proyecto);
 }
}
