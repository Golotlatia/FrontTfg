import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timer } from '../../interfaces/timer';


const addUrl = 'http://192.168.100.79:8080/addTimer';
const getUrl = 'http://192.168.100.79:8080/read';
const deleteUrl = 'http://192.168.100.79:8080/deleteTimer';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

 

  constructor(private http: HttpClient) { }



  

   addTimer (programa: timer):  any {
    
    
    console.log('El objeto que estoy intentando enviar es: ' + JSON.stringify(programa));
    return  this.http.post<any>(addUrl, programa );
   
    
  }


   getTimers (): any {    

     return this.http.get(getUrl);
  }

  deleteTimer (programa: timer): any {    

    return this.http.post(deleteUrl, programa);
 }


}
