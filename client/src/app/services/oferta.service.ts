import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OfertaService {

	// private url = 'http://localhost:3000/api/oferta';
	private url = 'https://nilo-materiais-construcao.herokuapp.com/api/oferta';

	constructor(private http: Http) {
	}

	getAll() {
		return this.http.get(this.url)
			.map(response => response.json())
			.catch(error => 'Server error');
	}

	getLast(lastNum: number) {
		let params = new URLSearchParams();
		params.set('qtd', '4');
		let options = new RequestOptions({
			// Have to make a URLSearchParams with a query string
			search: params // <-----
		});
		return this.http.get(this.url, options)
			.map(response => response.json())
			.catch(error => 'Server error');
	}

	get(id) {
		return this.http.get(this.url + '/' + id).toPromise()
			.then(response => response.json())
			.catch(error => 'Server error');
	}

	insert(oferta) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return new Promise((resolve, reject) => {
			this.http.post(this.url, oferta, options).toPromise()
			.then(response => resolve(response.json()))
			.catch(error => reject(error))
		});
	}

	remove(id) {
		return this.http.delete(this.url + id).toPromise()
			.then(response => response.json())
			.catch(error => console.log(error));
  	}
}
