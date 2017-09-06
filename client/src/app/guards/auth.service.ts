import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private loggedIn: boolean = false;

  constructor(private router: Router) { }

  login(username: string, password: string) {
    if (username == 'nilo' && password == 'nilo201730') {
      this.loggedIn = true;

      this.router.navigate(['/adm/painel/produtos']);
    }
  }
  
  isLoggedIn() {
    return this.loggedIn;
  }

}
