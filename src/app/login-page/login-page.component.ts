//Javier Zapatero Santos TFG
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
  }

  
  login(){

    this.authservice.login();


    

  }
  

}
