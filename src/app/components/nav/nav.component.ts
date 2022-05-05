import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
