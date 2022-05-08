import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  skills: any[] = [
    {   porcentaje: 12,
        area: "Git"
    },
    {   porcentaje: 92,
      area: "LIDERAZGO"
  },
  {   porcentaje: 52,
    area: "COMUNICACIÓN"
},
{   porcentaje: 42,
  area: "MYSQL"
},
{   porcentaje: 10,
  area: "JAVA"
},
{   porcentaje: 32,
  area: "ANGULAR"
}];
}
