import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {


  constructor(private http: HttpClient) {

  }

  getById(id: number): Observable<any> {
	  return this.http.get(`http://comunidad-apirest.herokuapp.com/api/educacion/${id}`);
	}
  getAll(): Observable<any> {
	  return this.http.get(`http://comunidad-apirest.herokuapp.com/api/educacion/`);
	}
  //terminar en algun momento
  update(id: number, educacion: any): Observable<any>{
    return this.http.put(`http://comunidad-apirest.herokuapp.com/api/educacion/${id}`, educacion);
  }

  //terminar en algun momento
  delete(id: number): Observable<any>{
    return this.http.delete(`http://comunidad-apirest.herokuapp.com/api/educacion/${id}`);
  }
 save(educacion:any) : Observable<any>{
   return this.http.post(`http://comunidad-apirest.herokuapp.com/api/educacion/`, educacion);
 }
}


