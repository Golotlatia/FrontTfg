//Javier Zapatero Santos TFG
import { LoginPageComponent } from './login-page/login-page.component';
import { TimerPageComponent } from './timer-page/timer-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebLayoutComponent } from './web-layout/web-layout.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'timer', component: TimerPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
