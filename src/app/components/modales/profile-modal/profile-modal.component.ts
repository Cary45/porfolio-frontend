import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/services/interface/Persona';
import { PersonaService } from 'src/app/services/api-rest/persona.service';


@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent implements OnInit {

  @Input()  id!:number; 
  
  persona!:Persona;
  formulario!:FormGroup

  constructor(public activeModal: NgbActiveModal, private personaService:PersonaService, private fb: FormBuilder) {
    this.formulario = this.fb.group({
  idpersona: [''],
  nombre: [''],
  apellido: [''],
  email: [''],
  telefono: [''],
  fotourl: [''],
  persona: [''],

})

}
  ngOnInit(): void {
    this.getById(this.id)
  }

  cerrarModal(){
    this.activeModal.close();
  }

  getById(id: number) {
    // console.log(this.id)
     this.personaService.getById(id).subscribe (
             data => {
          this.persona = data; 
          //console.log(this.proyecto)
          this.editarForm(this.persona)
         }
         );
 
   }
   editarForm(pro:any){
     this.formulario.setValue( {
       idpersona: pro.idpersona,
       nombre: pro.nombre,
       apellido: pro.apellido,
       email: pro.email,
       telefono: pro.telefono,
       fotourl: pro.fotourl,
       persona: pro.persona
     });
   }
 
}
