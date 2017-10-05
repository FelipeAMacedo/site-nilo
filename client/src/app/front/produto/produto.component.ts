import { ImagemService } from './../../services/imagem.service';
import { Observable } from 'rxjs/Rx';
import { Produto } from './../../model/produto';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

	id = '';
	produto: Produto = new Produto();
	mensagem: boolean = false;
	imgUrl = "/assets/images/produtos/";

	constructor (private produtoService: ProdutoService, private imagemService: ImagemService, private route: ActivatedRoute) {
		this.route.params.subscribe(params => this.id = params['id']);
		if (this.id != '' && this.id != null) {
		  this.produtoService.get(this.id)
			.subscribe(prod => {
				if (!prod) {
					this.mensagem = true;
				} else {


					this.produto = prod;
					
					console.log(this.produto.informacao);
					console.log(this.produto.frete);
					
					if (this.produto.frete) {
						this.produto.informacao += '<br />Frete a Combinar';
					}
					

					this.imagemService.findByProdutoId(this.produto.id)
					.then(response => {
						response.forEach(imagem => {
							if(imagem.posicao == 1) {
								let img = (<HTMLImageElement>document.getElementById('imagem'));
								img.src = this.imgUrl + imagem.nome;


								// this.imagemService.getImage(imagem.nome).then(resBase64 => {
								// 	let img = (<HTMLImageElement>document.getElementById('imagem'));
								// 	img.src = 'data:image/png;base64, ' + resBase64;
								// });
							}
						});
					});
				}
			},
			error => {
				this.mensagem = true;
				console.log(error);
			});
		} else {
			this.mensagem = true;
		}
	}


	ngOnInit() {
		
	}

}
