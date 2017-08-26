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

	constructor(private produtoService: ProdutoService, private route: ActivatedRoute) { }

	produto;

	ngOnInit() {
		this.route.params
		// (+) converts string 'id' to a number
		.switchMap((params: Params) => this.produtoService.get(params['id']))
		.subscribe((p) => this.produto = p);
	}

}
