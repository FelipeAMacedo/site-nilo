import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProdutoService {

  url = 'http://localhost:3000/api/produtos/';

  constructor(private http: Http) {
  }

  getList(categoria: string) {
    return this.http.get(this.url + categoria)
        .map(response => response.json())
        .catch(error => 'Server error');
  }

  insert(produto) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, produto, options).toPromise()
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  remove(id) {
    return this.http.delete(this.url + id).toPromise()
      .then(response => response.json())
      .catch(error => console.log(error));
    // this.produtos.
  }
}
