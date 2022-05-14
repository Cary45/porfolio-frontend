import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonaService } from 'src/app/services/api-rest/persona.service';
import { Persona } from 'src/app/services/interface/Persona';
import { ProfileModalComponent } from '../modales/profile-modal/profile-modal.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  labelForContactLink: string = "Ver información de contacto";
  persona!: Persona;


  constructor(private personaService:PersonaService,private modalService: NgbModal) { }

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
    this.getById(1);
  }

   
  
  abrirModal(id:any){
    //utiliza el metodo open de NgbModal para abrir el modal. El parametro es el componente que se va a mostrar en el modal. "centred" se usa para centrar el modal.
    const modalRef = this.modalService.open(ProfileModalComponent, { centered: true }   );   //{ centered: true }     
    modalRef.componentInstance.id = id;     // pasa el id del elemento que se quiere editar al componente del modal
  }







  //moverlo a un servicio
  isLoggedIn(): boolean {
    let personaFromStorage: Persona = JSON.parse(localStorage.getItem('persona') || '{}');
    if(personaFromStorage.token) {
      return true; // si hay un token, está loggeado
    }
    return false; //no está loggeado
  }

  
}
