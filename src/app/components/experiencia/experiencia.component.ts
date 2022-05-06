import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
  Experiencia: any[] = [
    {
      idlaboral: 1,
      puesto: 'Informatico',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
      empresa: 'Argentina',
      inicio: '10/10/10',
      fin: '10/10/10',
      fotourl: "https://via.placeholder.com/150",
      persona: 1,
    },
    {
      idlaboral: 1,
      puesto: 'Informatico2',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
      empresa: 'Argentina',
      inicio: '09/09/09',
      fin: '09/09/09',
      fotourl: "https://via.placeholder.com/150",
      persona: 1,
    },
  ];
}
