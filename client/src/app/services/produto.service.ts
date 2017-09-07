import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/timeout';

@Injectable()
export class ProdutoService {

	private url = 'http://localhost:3000/api/produtos/';
	// private url = 'https://nilo-materiais-construcao.herokuapp.com/api/produtos/';

	constructor(private http: Http) {
	}

	getAll() {
		return this.http.get(this.url).toPromise()
			.then(response => response.json())
			.catch(error => 'Server error');
	}

	getList(categoria: string) {
		return this.http.get(this.url + categoria).toPromise()
			.then(response => response.json())
			.catch(error => 'Server error');
	}

	get(id) {
		return this.http.get(this.url + id).toPromise()
			.then(response => response.json())
			.catch(error => 'Server error');
	}

	insert(produto) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(this.url, produto, options)
			.toPromise()
			.then(response => response.json())
			.catch(error => 'Server error');
	}

	remove(id) {
		return this.http.delete(this.url + id).toPromise()
			.then()
			.catch(error => console.log(error));
  	}
}
