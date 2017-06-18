import { FormsModule } from '@angular/forms';
import { Produto } from './../../model/produto';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  produto: Produto = new Produto();

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
  }

  novoProduto() {
    this.produtoService.insert(this.produto).then(response => this.produto = new Produto());
  }

}
