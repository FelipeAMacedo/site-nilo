import { Produto } from './../../../model/produto';
import { ProdutoService } from './../../../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  mostrar = false;
  fotos = {};
  produtos = [];
  novoProduto: Produto = new Produto();
  
  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.getAll().then(lista => this.produtos = lista);
  }

  toggleInsert() {
    this.mostrar = !this.mostrar;
  }

  a() {}

  addFoto(event, id, element) {
    this.fotos[id] = event.srcElement.files[0];
    
    if(this.fotos[id] || this.fotos[id] != null) {

      let reader = new FileReader();

      reader.onloadend= function () {
        element.src = reader.result;
      }

      reader.readAsDataURL(this.fotos[id]);
    }
  }

  apagarImagem(element, id, inputFoto) {
    this.fotos[id] = "";
    inputFoto.value = null;
    element.parentElement.querySelector("img").src = "";
  }

  deletar(id) {
    this.produtoService.remove(id).then(response => {
      this.produtoService.getAll().then(lista => this.produtos = lista);  
    }).catch(err => {
      throw "O objeto não foi removido";
    });
  }

  editarProduto(produto) {
    this.novoProduto = produto;
    this.mostrar = true;
  }

  inserirProduto() {
    if(this.novoProduto.id){

    } else {
      this.produtoService.insert(this.novoProduto).then(response => {
        this.novoProduto = new Produto();
      }).catch(err => {
        throw err;
      });
    }
  }
}
