import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

    
    Proyectos: any[] = [

      {
        idproyecto: 1,
        proyecto: 'Proyecto 1',
        descrip: 'Esto es una descripción del proyecto 1.Lorem Ipsum is simply dummy tlkdfñldklñfkñldk slfk ñsalfksalñkf sñalkf salñkfsa lñkfñlak af lakñl klsñk lñk a slñk lask lfk f añflkas lñkfaslñk lk as añlksañl kflñ kaa afklñ kñlsk lñk  ñlfklñsk ñlsk alñ k ñlkflñsklskfsñ k',
        url: 'https://github.com',
        fotourl: "https://global-uploads.webflow.com/5f5a53e153805db840dae2db/6073fbf151fa4565d48572dc_GitHub_aprender-programaci%25C3%25B3n.jpeg",
      },
      {
        idproyecto: 2,
        proyecto: 'Proyecto 2',
        descrip: 'Esto es una descripción del proyecto 2',
        url: 'https://github.com',
        fotourl: "https://global-uploads.webflow.com/5f5a53e153805db840dae2db/6073fbf151fa4565d48572dc_GitHub_aprender-programaci%25C3%25B3n.jpeg",
      },
      
    ];
  }
