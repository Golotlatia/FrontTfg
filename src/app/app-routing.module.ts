//Javier Zapatero Santos TFG
import { LoginPageComponent } from './login-page/login-page.component';
import { TimerPageComponent } from './timer-page/timer-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { NgModule  } from '@angular/core';
import { RouterModule, Routes, CanActivate  } from '@angular/router';
import { WebLayoutComponent } from './web-layout/web-layout.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard/auth-guard.service';


export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: '',
    component: WebLayoutComponent,
    canActivate:[AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardPageComponent, canActivate:[AuthGuard] },
  { path: 'timer', component: TimerPageComponent, canActivate:[AuthGuard]},
      
    ],
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
