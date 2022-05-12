import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/api-rest/user.service';
import { Persona } from 'src/app/services/interface/Persona';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  persona!: Persona;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    //probablemente acá quiera cargar algo...
  }

  loginFalso() {
    //pedir al post...
    this.userService.login("olivia", "1234").subscribe(
      data => {
        this.persona = data;
        console.log(this.persona);
        localStorage.setItem("persona", JSON.stringify(this.persona));
        this.volverAlHome();
      }
    );
  }

  login(username: string, password: string) {
    //pedir al post...
    this.userService.login(username, password).subscribe(
      data => {
        this.persona = data;
        console.log(this.persona);
        localStorage.setItem("persona", JSON.stringify(this.persona));
        this.volverAlHome();
      }
    );
  }

  volverAlHome() {
    this.router.navigate(['']);
  }

}
