import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyecto } from 'src/app/services/interface/Proyecto';
import { ProyectosService } from 'src/app/services/api-rest/proyectos.service';

@Component({
  selector: 'app-proyecto-modal',
  templateUrl: './proyecto-modal.component.html',
  styleUrls: ['./proyecto-modal.component.css']
})
export class ProyectoModalComponent implements OnInit {

  
  @Input()  id!:number; //recibe el id del elemento que se quiere editar

  proyecto!:Proyecto;
  formulario!:FormGroup
  constructor(public activeModal: NgbActiveModal, private proyectoService:ProyectosService, private fb: FormBuilder) {
    this.formulario = this.fb.group({
      idproyecto: [''],
      titulo: [''],
      descripcion: [''],
      url: [''],
      persona: [''],
    })
   /*  esto lo saque de la interface proyecto 
    ideproyecto?: number;
    titulo: String;
    descripcion: string;
    url: String; 
    persona: number;
    */
  }

  ngOnInit(): void {
    this.getById(this.id)  
  }

  cerrarModal(){
    this.activeModal.close();
  }

  getById(id: number) {
   // console.log(this.id)
    this.proyectoService.getById(id).subscribe (
            data => {
         this.proyecto = data; 
         //console.log(this.proyecto)
         this.editarForm(this.proyecto)
        }
        );

  }
  editarForm(pro:any){
    this.formulario.setValue( {
      idproyecto: pro.idproyecto,
      titulo: pro.titulo,
      descripcion: pro.descripcion,
      url: pro.url,
      persona: pro.persona
    });
  }

}
