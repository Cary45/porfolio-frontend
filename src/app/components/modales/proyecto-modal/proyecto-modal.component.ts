import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proyecto-modal',
  templateUrl: './proyecto-modal.component.html',
  styleUrls: ['./proyecto-modal.component.css']
})
export class ProyectoModalComponent implements OnInit {

  
  @Input()  id!:number; //recibe el id del elemento que se quiere editar

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.activeModal.close();
  }
}
