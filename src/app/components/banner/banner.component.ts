import { Component, Input, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/api-rest/persona.service';
import { Persona } from 'src/app/services/interface/Persona';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {
  @Input() url!: String;
  persona! : Persona
  constructor (private personaService : PersonaService){}
  

  ngOnInit(): void {
    this.actualizarBanner(1);

  }

  actualizarBanner (id:number) {
    this.personaService.getById(id).subscribe
    (
      data => { this.persona = data; }
   )
  }
}