import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticationService } from 'src/app/services/api-rest/autentication.service';
import { LoginService } from 'src/app/services/api-rest/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  login:any;

  socialLinks: any[] = [
    {
      "idred": 1,
      "nombre": "Linkedin",
      "url": "https://linkedin.com/in/olivia",
      "fotourl": null,
      "persona": 1
    },
    {
      "idred": 2,
      "nombre": "Github",
      "url": "https://github.com/olivia",
      "fotourl": null,
      "persona": 1
    },
    {
      "idred": 3,
      "nombre": "Instagram",
      "url": "https://instagram.com/olivia",
      "fotourl": null,
      "persona": 1
    }
  ];

  constructor(private router: Router, private loginService:LoginService, private autenticationServ: AutenticationService) { }

  ngOnInit(): void {
    this.loginService.LogState().subscribe((login) => (this.login = login)); 
  }

  iniciarSesion(){
    this.router.navigate(['login']);   
  }

  cerrarSesion(){
    this.autenticationServ.CerrarSesion();
    this.router.navigate(['home']);
  }
  /*
  isLoggedIn(): boolean {

    return this.loginService.isLoggedIn();  
  }
  */
}
