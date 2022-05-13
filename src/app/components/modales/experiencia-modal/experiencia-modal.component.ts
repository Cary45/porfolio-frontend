import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-experiencia-modal',
  templateUrl: './experiencia-modal.component.html',
  styleUrls: ['./experiencia-modal.component.css']
})
export class ExperienciaModalComponent implements OnInit {

  @Input()  id!:number; //recibe el id del elemento que se quiere editar

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.activeModal.close();
  }
}
