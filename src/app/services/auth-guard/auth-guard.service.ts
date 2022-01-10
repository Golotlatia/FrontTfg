import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authservice: AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let res: Boolean;

    let response = this.authservice.comprobar()

    return response.then(respuesta => {

      if (respuesta) {
        return true
      } else {
        return this.router.createUrlTree(
          ['/login', { message: 'No tienes la autorizacion necesaria' }]

        );
      }

    })
  }
}
