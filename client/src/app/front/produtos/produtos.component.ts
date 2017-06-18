import { Produto } from './../../model/produto';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {

  produtos;
  categoria: string;

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.produtoService.getList(params['categoria']))
    .subscribe((lista) => this.produtos = lista);
    // this.categoria = 'pedra';
    // this.produtoService.getList(this.categoria).subscribe(lista => this.produtos = lista);
  }

  changeToList(event) {
    event.preventDefault();
    let items = document.getElementById('products').getElementsByClassName('item');
    for(let x = 0; x < items.length; x++) {
      items[x].classList.add('list-group-item');
    }
  }

  changeToGrid(event) {
    event.preventDefault();
    let items = document.getElementById('products').getElementsByClassName('item');
    for(let x = 0; x < items.length; x++) {
      items[x].classList.remove('list-group-item');
    }
  }
}
