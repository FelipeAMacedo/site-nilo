import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ImagemService {

  private url = 'http://localhost:3000/api/imagem/';
  // private url = 'https://nilo-materiais-construcao.herokuapp.com/api/imagem/'

  constructor(private http: Http) { }

  findMain(produtoId) {
    return this.http.get(this.url + produtoId + '/principal').toPromise()
      .then(response => response.json())
      .catch(error => 'Server error');
  }

  findByProdutoId(produtoId) {
    return this.http.get(this.url + 'produto/' + produtoId).toPromise()
      .then(response => response.json())
      .catch(error => console.log(error));
  }

  getImage(filename) {
    return this.http.get(this.url + 'image/' + filename).toPromise()
      .then(response => response.text())
      .catch(error => console.log(error));
  }

  insert(file, fileInfo) {
    return new Promise((resolve, reject) => {
      let formData: any = new FormData();
      let xhr = new XMLHttpRequest();

      formData.append("fileInfo", JSON.stringify(fileInfo));
      formData.append("selectFile", file, file.name);


      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              resolve('ss');
            } else {
              reject(xhr.response);
            }
        }
      }
      xhr.open("POST", this.url, true);
      xhr.send(formData);

		// let headers = new Headers({ 'Content-Type': 'application/json' });
		// let options = new RequestOptions({ headers: headers });
		// return this.http.post(this.url, data, options)
		// 	.toPromise()
		// 	.then(response => {
    //     response.json()
    //   })
    // 	.catch(error => 'Server error');
    });
  }
}
