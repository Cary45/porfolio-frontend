import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/services/api-rest/login.service';
import { PersonaService } from 'src/app/services/api-rest/persona.service';
import { Persona } from 'src/app/services/interface/Persona';
import { AboutModalComponent } from '../modales/about-modal/about-modal.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 constructor(private personaService:PersonaService, private modalService: NgbModal, private loginService:LoginService)  { }

  persona!: Persona [];
   
  getById(id: number) {
    this.personaService.getById(1).subscribe (
			data => { this.persona = data; }
		);
  }
  
  update(id: number, profile: any) {
      this.personaService.update(id,this.persona).subscribe (
        data => { this.persona = data; }
      );
    }
    ngOnInit(): void {
      this.getById(1) }
     
  About: any[] = [
  {   acercade: "Acerca de",
      texto: "Programador fullstack junior freelance."

  } 
]
abrirModal(id:any){
  //utiliza el metodo open de NgbModal para abrir el modal. El parametro es el componente que se va a mostrar en el modal. "centred" se usa para centrar el modal.
  const modalRef = this.modalService.open(AboutModalComponent, { centered: true }   );   //{ centered: true }     
  modalRef.componentInstance.id = id;     // pasa el id del elemento que se quiere editar al componente del modal
}
isLoggedIn(): boolean {

  return this.loginService.isLoggedIn();  
}

}
