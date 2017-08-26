import { EmailContato } from './emailContato';
import { ContatoService } from './contato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  email: EmailContato = new EmailContato();

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
  }

  enviarEmail() {
    this.contatoService.enviarEmail(this.email);
  }
}
