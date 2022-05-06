import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  Profile: any [] = [
    { nombre: "Juan Minujin",
      profesion: "Programador",
      localidad: "Buenos Aires, Provincia de Buenos Aires, (Argentina).",
      contacto: "Información de contacto"
 }
  ]

}
