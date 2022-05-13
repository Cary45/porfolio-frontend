import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  constructor(private http: HttpClient) {

  }

  getById(id: number): Observable<any> {
	  return this.http.get(`http://comunidad-apirest.herokuapp.com/api/laboral/${id}`);
	}
  getAll(): Observable<any> {
	  return this.http.get(`http://comunidad-apirest.herokuapp.com/api/laboral/`);
	}
  //terminar en algun momento
  update(id: number, laboral: any): Observable<any>{
    return this.http.put(`http://comunidad-apirest.herokuapp.com/api/laboral/${id}`, laboral);
  }

  //terminar en algun momento
  delete(id: number): Observable<any>{
    return this.http.delete(`http://comunidad-apirest.herokuapp.com/api/laboral/${id}`);
  }
 save(laboral:any) : Observable<any>{
   return this.http.post(`http://comunidad-apirest.herokuapp.com/api/laboral/`, laboral);
 }
 
}
