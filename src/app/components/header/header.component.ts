import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/api-rest/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
  isLoggedIn(): boolean {

    return this.loginService.isLoggedIn();  
  }

}
