import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/api-rest/persona.service';
import { Persona } from 'src/app/services/interface/Persona';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  labelForContactLink: string = "Ver información de contacto";
  persona!: Persona;


  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.getById(1);
  }

  getById(id: number) {
    this.personaService.getById(id).subscribe (
			data => { this.persona = data; }
		);
  }

  //moverlo a un servicio
  isLoggedIn(): boolean {
    let personaFromStorage: Persona = JSON.parse(localStorage.getItem('persona') || '{}');
    if(personaFromStorage.token) {
      return true; // si hay un token, está loggeado
    }
    return false; //no está loggeado
  }

  
}
