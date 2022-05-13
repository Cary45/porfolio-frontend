import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skills-modal',
  templateUrl: './skills-modal.component.html',
  styleUrls: ['./skills-modal.component.css']
})
export class SkillsModalComponent implements OnInit {


  @Input()  id!:number; //recibe el id del elemento que se quiere editar

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  cerrarModal(){
    this.activeModal.close();
  }
}
