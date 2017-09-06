import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/adm']);

    return false;
  }
}
