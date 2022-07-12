import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "https://apicarina1.herokuapp.com/ap"
  user: User = { username: "", password: "", token: "" };

  constructor(private http: HttpClient) {

  }

  login(username: string, password: string): Observable<any> {  
    this.user.username = username;
    this.user.password = password;
	  return this.http.post(`https://apicarina1.herokuapp.com/ap/login`, this.user);
	}

  
}
