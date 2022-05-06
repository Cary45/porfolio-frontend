import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
  About: any[] = [
  {   acercade: "Acerca de",
      texto: "Programador fullstack junior freelance."

  } 
]

}
