import { ImagemService } from './../../services/imagem.service';
import { getTestBed } from '@angular/core/testing';
import { ProdutoService } from './../../services/produto.service';
import { OfertaService } from './../../services/oferta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ofertaService: OfertaService, 
    private produtoService: ProdutoService,
    private imagemService: ImagemService) { }

  private ofertas = [];  
  private produtos = [];

  ngOnInit() {
    // this.ofertaService.getLast(4).subscribe(lista => {
    //   lista.forEach(oferta => {
    //     this.imagemService.findMain(oferta.ProdutoId).then(imagem => {
    //       this.produtoService.get(oferta.ProdutoId)
    //       .subscribe(result => {
    //         result.imagem = imagem.path;
    //         result.precoOferta = oferta.preco;
    //         this.ofertas.push(result);
    //       },
    //       error => {
    //         throw error;
    //       });
    //     });
    //   });
    // });

    // this.produtoService.getLast(4).subscribe(lista => {
    //   console.log(lista);
    //   lista.forEach(produto => {
    //     this.imagemService.findMain(produto.ProdutoId).then(imagem => {
    //       this.produtoService.get(produto.ProdutoId)
    //       .subscribe(result => {
    //         result.imagem = imagem.path;
    //         this.produtos.push(result);
    //       },
    //       error => {
    //         throw error;
    //       });
    //     });
    //   });
    // });

    console.log('Vai para a lista');
    this.produtoService.getLast(4)
    .then(lista => {
      console.log('Essa é a lista');
      console.log(lista.length);
      for (let produto of lista) {
      
        this.imagemService.findMain(produto.ProdutoId).then(imagem => {
          this.produtoService.get(produto.ProdutoId)
          .subscribe(result => {
            result.imagem = imagem.path;
            this.produtos.push(result);
          },
          error => {
            throw error;
          });
        });
      };
    })
    .catch(error => {
      console.log('Error');
    });
  }
}
