import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent implements OnInit {

  @Input()  id!:number; 
  
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  cerrarModal(){
    this.activeModal.close();
  }
}
