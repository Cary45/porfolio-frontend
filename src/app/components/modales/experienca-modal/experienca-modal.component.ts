import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-experienca-modal',
  templateUrl: './experienca-modal.component.html',
  styleUrls: ['./experienca-modal.component.css']
})
export class ExperiencaModalComponent implements OnInit {

  @Input()  id!:number; //recibe el id del elemento que se quiere editar

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.activeModal.close();
  }
}
