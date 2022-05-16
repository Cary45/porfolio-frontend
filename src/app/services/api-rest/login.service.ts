import { Injectable } from '@angular/core';
import { Persona } from '../interface/Persona';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isLoggedIn(): boolean {
    let personaFromStorage: Persona = JSON.parse(localStorage.getItem('persona') || '{}');
    if(personaFromStorage.token) {
      return true; // si hay un token, está loggeado
    }
    return false; //no está loggeado
  }
  
}
