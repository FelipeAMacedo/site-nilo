import { ImagemService } from './../../services/imagem.service';
import { Produto } from './../../model/produto';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {

  produtos = [];
  categoria: string;

  constructor(private produtoService: ProdutoService, private imagemService: ImagemService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => this.categoria = params['categoria']);
    if (this.categoria != '' && this.categoria != null) {
      this.produtoService.getListCanShow(this.categoria)
      .then(lista => {
        this.produtos = lista;
        lista.forEach(produto => {
          
          this.imagemService.findMain(produto.id)
          .then(imagem => {
            this.imagemService.getImage(imagem.nome).then(resBase64 => {
              // setTimeout(() => {
                // console.log(produto.id);
                let img = (<HTMLImageElement>document.getElementById(produto.id));
                img.src = 'data:image/png;base64, ' + resBase64;

              // }, 5000);
            });
          
          });
        });
      });
    } else {
      this.produtoService.getAll()
        .then(lista => this.produtos = lista);
    }
  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        let antigaCategoria = this.categoria;

        this.route.params.subscribe(params => this.categoria = params['categoria']);

        if (this.categoria != "" && this.categoria != null) {
          this.produtoService.getListCanShow(this.categoria)
            .then(lista => {
              this.produtos = lista;
              // lista.forEach(produto => {
                
              //   this.imagemService.findMain(produto.id)
              //   .then(imagem => {

              //     this.imagemService.getImage(imagem.nome).then(resBase64 => {
              //       let img = (<HTMLImageElement>document.getElementById(produto.id));
              //       img.src = 'data:image/png;base64, ' + resBase64;
              //     });
                
              //   });
              // });
            });
        } else {
          this.produtoService.getAll()
            .then(lista => this.produtos = lista);
        }
      }
    });
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
