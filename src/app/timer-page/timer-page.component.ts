//Javier Zapatero Santos TFG
import { NgxMaterialTimepickerTheme } from './../../../node_modules/ngx-material-timepicker/src/app/material-timepicker/models/ngx-material-timepicker-theme.interface.d';
import { Component, OnInit } from '@angular/core';
import { timer } from '../interfaces/timer';

@Component({
  selector: 'app-timer-page',
  templateUrl: './timer-page.component.html',
  styleUrls: ['./timer-page.component.css'],
})




export class TimerPageComponent implements OnInit {
  public selectedTime = '18:33';

  private programa: timer = {


    nombre: '',
    horaFinalMinutos: '',
    horaFinalHoras: '',
    horaInicioMinutos: '',
    horaInicioHoras: '',
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
  console.log(this.programa.lunes);
}
martes() {
  this.programa.martes = !this.programa.martes;
  console.log(this.programa.martes);
}
miercoles() {
  this.programa.miercoles = !this.programa.miercoles;
  console.log(this.programa.miercoles);
}
jueves() {
  this.programa.jueves = !this.programa.jueves;
  console.log(this.programa.jueves);
}
viernes() {
  this.programa.viernes = !this.programa.viernes;
  console.log(this.programa.viernes);
}
sabado() {
  this.programa.sabado = !this.programa.sabado;
  console.log(this.programa.sabado);
}
domingo() {
  this.programa.domingo = !this.programa.domingo;
  console.log(this.programa.domingo);
}





  constructor() {}

  ngOnInit(): void {

    console.log(this.programa);
    

  
  }
}
