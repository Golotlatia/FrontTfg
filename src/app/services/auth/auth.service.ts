import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { respuesta } from 'src/app/interfaces/respuesta';



const urlVerify = 'http://192.168.1.50:8080/verifyToken';
const urlLogin = 'http://192.168.1.50:8080/getToken';




@Injectable({
  providedIn: 'root'
})


export class AuthService {

  token = {'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiamF2aSIsImNvbnRyYXNlw7FhIjoiY29udHJhc2XDsWEgZGUgamF2aSsiLCJpYXQiOjE2NDE4MjE5NTh9.VQbnvQdxxLHhqsPTeiNkVZch5q4_0Jj_IO_eLn2DJq4'};

  httpOptions = {
    
    headers: new HttpHeaders({
  
      'auth-token': this.token.token,
    })

  };

  constructor(private http: HttpClient) {

    
   }


   login () {
    
     this.getToken();    

     
   }

  async getToken(): Promise<any> {
    

    await this.http.get<respuesta>(urlLogin, this.httpOptions).subscribe( hola=> this.token.token=hola.token);

  }



  comprobar(): Promise<any> {

   let auth =  this.checkData();

   console.log('Token usado: ' +this.token.token);

   return auth;
   
  }



  async checkData(): Promise<any> {

    return await this.http.get(urlVerify, this.httpOptions).toPromise();

  }



}


