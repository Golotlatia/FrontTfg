//Javier Zapatero Santos TFG
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TimerPageComponent } from './timer-page/timer-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { WebLayoutComponent } from './web-layout/web-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuardService as AuthGuard } from './services/auth-guard/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    NavbarComponent,
    SidebarComponent,
    TimerPageComponent,
    LoginPageComponent,
    WebLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
