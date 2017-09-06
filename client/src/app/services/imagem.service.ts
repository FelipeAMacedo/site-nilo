import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ImagemService {

  // private url = 'http://localhost:3000/api/imagem/';
  private url = 'https://nilo-materiais-construcao.herokuapp.com/api/image'

  constructor(private http: Http) { }

  findMain(produtoId) {
    return this.http.get(this.url + produtoId + '/principal').toPromise()
    .then(response => response.json())
    .catch(error => 'Server error');
  }

}
