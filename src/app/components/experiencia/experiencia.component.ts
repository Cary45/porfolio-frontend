import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExperienciaService } from 'src/app/services/api-rest/experiencia.service';
import { LoginService } from 'src/app/services/api-rest/login.service';
import { Laboral } from 'src/app/services/interface/Laboral';
import { ExperienciaModalComponent } from '../modales/experiencia-modal/experiencia-modal.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  constructor(private experienciaService:ExperienciaService, private modalService: NgbModal, private loginService:LoginService)  { }

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

  abrirModal(id:any){
    //utiliza el metodo open de NgbModal para abrir el modal. El parametro es el componente que se va a mostrar en el modal. "centred" se usa para centrar el modal.
    const modalRef = this.modalService.open(ExperienciaModalComponent, { centered: true }   );   //{ centered: true }     
    modalRef.componentInstance.id = id;     // pasa el id del elemento que se quiere editar al componente del modal
  }
  isLoggedIn(): boolean {

    return this.loginService.isLoggedIn();  
  }
}
