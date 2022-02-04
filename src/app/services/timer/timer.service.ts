import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timer } from '../../interfaces/timer';


const addUrl = 'http://192.168.100.79:8080/addTimer';
const urlLogin = 'http://192.168.100.79:8080/getToken';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(private http: HttpClient) { }






  async addTimer (programa: timer):  Promise<any> {
    

   
    
    console.log('El objeto que estoy intentando enviar es: ' + JSON.stringify(programa));
    return await this.http.post<any>(addUrl, programa ).subscribe(data => {});

    

    
  }


}
