import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { FCFMServiceService } from './services/fcfmservice.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('isLoggedIn')=== 'true') {
      console.log(localStorage.getItem('isLoggedIn')  )
      return true;
    } else {
      console.log(localStorage.getItem('isLoggedIn'))
      console.log('Acceso denegado');
      this.router.navigate(['/login-vendedor']);
      return false;
    }
  }



  constructor(
    private authService: FCFMServiceService,
    private router: Router
  ) {}
}
