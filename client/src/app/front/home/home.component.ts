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

  private produtos = [];

  ngOnInit() {
    this.ofertaService.getLast(4).subscribe(lista => {
      lista.forEach(oferta => {
        this.imagemService.findMain(oferta.ProdutoId).then(imagem => {
          this.produtoService.get(oferta.ProdutoId)
          .subscribe(result => {
            result.imagem = imagem.path;
            result.precoOferta = oferta.preco;
            this.produtos.push(result);
          },
          error => {
            throw error;
          });
        });
      });
    });
  }
}
