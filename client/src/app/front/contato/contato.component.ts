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
    this.contatoService.enviarEmail(this.email).then(() => {
      this.mostrarMensagem('success');
    })
    .catch(error => {
      this.mostrarMensagem('fail');
    });
  }

  mostrarMensagem(conclusion) {
    let alerta = document.getElementsByClassName('alert')[0];

    let mensagem;

    if (conclusion == 'success') {
      mensagem = document.getElementById('emailSuccess');

      alerta.classList.add('alert-success');
    } else if (conclusion == 'fail') {
      mensagem = document.getElementById('emailFail');

      alerta.classList.add('alert-danger');
    }

    alerta.classList.add('show');
    mensagem.classList.add('show');

    setTimeout(() => {
      alerta.classList.remove('show');
      mensagem.classList.remove('show');
    }, 4000);
  }
}
