import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/services/api-rest/experiencia.service';
import { Laboral } from 'src/app/services/interface/Laboral';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  constructor(private experienciaService:ExperienciaService)  { }

  experiencia!: Laboral [] ;

  getById(id: number) {
    this.experienciaService.getById(id).subscribe (
			data => { this.experiencia = data; }
		);
  }

  getAll() {
    this.experienciaService.getAll().subscribe (
			data => { this.experiencia = data; }
		);
  }
  delete(id: number) {
    this.experienciaService.delete(id).subscribe (
			data => { this.experiencia = data; }
		);
  }

  save(laboral:any) {
    this.experienciaService.save(laboral).subscribe (
			data => { this.experiencia = data; }
		);
  }

  update(id: number, laboral: any) {
    this.experienciaService.update(id,laboral).subscribe (
			data => { this.experiencia = data; }
		);
  }

  ngOnInit(): void {this.getAll() }
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
