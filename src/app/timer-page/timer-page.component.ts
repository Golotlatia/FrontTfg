//Javier Zapatero Santos TFG
import { NgxMaterialTimepickerTheme } from './../../../node_modules/ngx-material-timepicker/src/app/material-timepicker/models/ngx-material-timepicker-theme.interface.d';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-page',
  templateUrl: './timer-page.component.html',
  styleUrls: ['./timer-page.component.css'],
})
export class TimerPageComponent implements OnInit {
  public selectedTime = '18:33';


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

  constructor() {}

  ngOnInit(): void {

  
  }
}
