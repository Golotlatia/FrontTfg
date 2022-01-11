import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { respuesta } from '../../interfaces/respuesta';



@Injectable()
export class AuthGuardService implements CanActivate {
  respond = {'respuesta':'s'};

  constructor(private router: Router, private authservice: AuthService) { }

 canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let authGuard;

    return this.authservice.comprobar().then(datos=>{
      console.log('Los datos obtenido por el authguard son: '+datos.respuesta	 );

      authGuard=datos;

      if(authGuard.respuesta=='true'){
        return true
      }else{
        console.log("El authguard ha fallado, la respuesta es: " + authGuard.respuesta );
      return this.router.createUrlTree(
        ['/login', { message: 'No tienes la autorizacion necesaria' }]

      );
        
      }
      
      
    });
    

    
    }
  }

