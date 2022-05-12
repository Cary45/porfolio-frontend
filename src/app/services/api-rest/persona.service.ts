import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Persona } from '../interface/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) {

  }

  getById(id: number): Observable<any> {
	  return this.http.get(`http://comunidad-apirest.herokuapp.com/api/personas/${id}`);
	}

  //terminar en algun momento
  update(id: number, persona: any): Observable<any>{
    return this.http.put(`/---------/${id}`, persona);
  }

  //terminar en algun momento
  delete(id: number): Observable<any>{
    return this.http.delete(`/---------/${id}`);
  }


}
