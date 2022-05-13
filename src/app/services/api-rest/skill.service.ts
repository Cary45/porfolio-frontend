import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  
  constructor(private http: HttpClient) {}

  getById(id: number): Observable<any> {
	  return this.http.get(`http://comunidad-apirest.herokuapp.com/api/skills/${id}`);
	}
  getAll(): Observable<any> {
	  return this.http.get(`http://comunidad-apirest.herokuapp.com/api/skills/`);
	}
  //terminar en algun momento
  update(id: number, skill: any): Observable<any>{
    return this.http.put(`http://comunidad-apirest.herokuapp.com/api/skills/${id}`, skill);
  }

  //terminar en algun momento
  delete(id: number): Observable<any>{
    return this.http.delete(`http://comunidad-apirest.herokuapp.com/api/skills/${id}`);
  }
 save(skill:any) : Observable<any>{
   return this.http.post(`http://comunidad-apirest.herokuapp.com/api/skills/`, skill);
 }
}
