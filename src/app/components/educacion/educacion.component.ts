import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; //importa el servicio de modal
import { EducacionModalComponent } from '../modales/educacion-modal/educacion-modal.component'; //importa el componente para usarlo como modal

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit { 

  //inyecta el servicio de modal
  constructor(private modalService: NgbModal) {}

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

  abrirModal(id:number){
    //utiliza el metodo open de NgbModal para abrir el modal. El parametro es el componente que se va a mostrar en el modal. "centred" se usa para centrar el modal.
    const modalRef = this.modalService.open(EducacionModalComponent,  { centered: true });        
    modalRef.componentInstance.id = id;     // pasa el id del elemento que se quiere editar al componente del modal
  }

}