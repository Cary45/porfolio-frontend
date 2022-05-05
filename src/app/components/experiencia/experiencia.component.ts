import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  Experiencia: any[] = [
    {
      idlaboral: 1,
      puesto: 'dios',
      descripcion: 'todo',
      empresa: 'nada',
      inicio: null,
      fin: null,
      fotourl: "https://via.placeholder.com/150",
      persona: 1,
    },
      {
      idlaboral: 1,
      puesto: 'dios1',
      descripcion: 'todo1',
      empresa: 'nada2',
      inicio:" ayer",
      fin: "hoy",
      fotourl: "https://via.placeholder.com/150",
      persona: 1,
    },
  ];
}
