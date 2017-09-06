import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContatoService {
	
	// private url = 'http://localhost:3000/api/contato/';
	private url = 'https://nilo-materiais-construcao.herokuapp.com/api/contato/';

	constructor(private http: Http) { }

	enviarEmail(email) {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers });
		return this.http.post(this.url, email, options).toPromise()
		  	.then(response => {
				console.log('chegou na linha do service');
				console.log(response);
			})
		  	.catch(error => console.log(error));
  }
}
