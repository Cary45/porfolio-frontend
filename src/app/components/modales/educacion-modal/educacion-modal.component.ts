import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; //importa el servicio de modal

@Component({
  selector: 'app-educacion-modal',
  templateUrl: './educacion-modal.component.html',
  styleUrls: ['./educacion-modal.component.css']
})
export class EducacionModalComponent implements OnInit {

  @Input()  id!:number; //recibe el id del elemento que se quiere editar

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.activeModal.close();
  }

}
