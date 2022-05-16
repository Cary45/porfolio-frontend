import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/api-rest/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

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

  constructor(private router: Router, private loginService:LoginService) { }

  ngOnInit(): void {
  }

  iniciarSesion(){
    this.router.navigate(['login']);   
  }
  isLoggedIn(): boolean {

    return this.loginService.isLoggedIn();  
  }
}
