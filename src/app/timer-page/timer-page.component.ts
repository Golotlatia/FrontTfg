//Javier Zapatero Santos TFG
import { NgxMaterialTimepickerTheme } from './../../../node_modules/ngx-material-timepicker/src/app/material-timepicker/models/ngx-material-timepicker-theme.interface.d';
import { Component, OnInit } from '@angular/core';
import { timer } from '../interfaces/timer';
import {TimerService} from '../services/timer/timer.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-timer-page',
  templateUrl: './timer-page.component.html',
  styleUrls: ['./timer-page.component.css'],
})




export class TimerPageComponent implements OnInit {

   StartTime:any;
   EndTime:any;
   timerName='';

  public selectedTime = '18:33';
  products: Observable<timer[]>;

   programa: timer = {


    nombre: '',
    horaInicio: '',
    horaFinal: '',  
    lunes: false,
    martes: false,
    miercoles: false,
    jueves: false,
    viernes: false,
    sabado: false,
    domingo: false
  };

  darkTheme: NgxMaterialTimepickerTheme = {
    container: {
        bodyBackgroundColor: '#424242',
        buttonColor: '#fff',
    },
    dial: {
        dialBackgroundColor: '#555',
    },
    clockFace: {
        clockFaceBackgroundColor: '#555',
        clockHandColor: '#9fbd90',
        clockFaceTimeInactiveColor: '#fff'
    }
};

lunes() {
  this.programa.lunes = !this.programa.lunes;
  console.log("Lunes: " + this.programa.lunes);
}
martes() {
  this.programa.martes = !this.programa.martes;
  console.log("Martes: " + this.programa.martes);
}
miercoles() {
  this.programa.miercoles = !this.programa.miercoles;
  console.log("Miercoles: " + this.programa.miercoles);
}
jueves() {
  this.programa.jueves = !this.programa.jueves;
  console.log("Jueves: " + this.programa.jueves);
}
viernes() {
  this.programa.viernes = !this.programa.viernes;
  console.log("Viernes: " + this.programa.viernes);
 
}
sabado() {
  this.programa.sabado = !this.programa.sabado;
  console.log("Sabado: " + this.programa.sabado);
}
domingo() {
  this.programa.domingo = !this.programa.domingo;
  console.log("Domingo: " + this.programa.domingo);
}

prueba(){

  this.programa.horaInicio = this.StartTime;
  this.programa.horaFinal = this.EndTime;
  console.log('El nombre que he puesto al temporizador es: ' + this.programa.nombre);

  const respuesta = this.TimeSer.addTimer(this.programa).subscribe(data=>{
    console.log("Respuesta del servidor: " + data);
    this.reloadData();
  });
  console.log('Respuesta del servidor: ' + respuesta);

  


  
}

reloadData(){
  this.TimeSer.getTimers().subscribe(
    data  => {
      console.log('Los datos recibidos por el servidor son: ' +  JSON.stringify(data)     );
      this.products=data;
       
      console.log('Los datos que estan en products son: ' + JSON.stringify(this.products));
      
      ;});

}


deleteTimer(programa:timer){

  console.log('El temporizador recibido es: ' +  JSON.stringify(programa));


  this.TimeSer.deleteTimer(programa).subscribe(
    data  => {
      console.log('Los datos recibidos por el servidor son: ' +  JSON.stringify(data)     );

      this.reloadData();
      
      
      ;});
}




  constructor(private TimeSer: TimerService) {}

  ngOnInit(): void {

    this.reloadData();
    
    

        

  
  }
}
