import { AuthService } from './../../guards/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logar() {
    this.authService.login(this.username, this.password);
  }

}
