import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit { 

  constructor() {}

  ngOnInit(): void {}
  Educacion: any[] = [
    {
      ideducion: 1,
      titulo: 'Full Stack Developer',
      fechafin: null,
      institucion: 'AP',
      institucionurl: 'www.inti.gob.ar',
      fotourl: "https://via.placeholder.com/150",
      persona: 1,
    },
    {
      ideducion: 2,
      titulo: 'Padawan',
      fechafin: '2021-01-01',
      institucion: 'Jedi Order',
      institucionurl: 'www.starwars.com',
      fotourl: "https://via.placeholder.com/150",
      persona: 1,
    },
  ];
}