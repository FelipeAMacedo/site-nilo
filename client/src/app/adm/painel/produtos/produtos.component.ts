import { ImagemService } from './../../../services/imagem.service';
import { Produto } from './../../../model/produto';
import { ProdutoService } from './../../../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  mostrar = true;
  fotos = {};
  produtos = [];
  novoProduto: Produto = new Produto();
  
  constructor(private produtoService: ProdutoService, private imagemService: ImagemService) { }

  ngOnInit() {
    this.produtoService.getAll().then(lista => this.produtos = lista);
  }

  toggleInsert() {
    this.mostrar = !this.mostrar;
  }

  addFoto(event, id, element) {
    this.fotos[id] = event.srcElement.files[0];
    
    if(this.fotos[id] || this.fotos[id] != null) {

      let reader = new FileReader();

      reader.onloadend = function () {
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
    console.log('ENTROU NO EDITAR');
    console.log('PRODUTO ID: ' + produto.id);
    this.imagemService.findByProdutoId(produto.id).then(response => {

      // this.mostrar = true;
      // console.log(response);
      console.log('PROCUROU A IMAGEM');
      let x = 2;
      console.log(response);
      response.forEach(image => {
        console.log('ENTROU NO FOR EACH');
        console.log(image.produtoId);
        let selector = "";
        if (image.banner) {
          selector = "#imgBanner";
        } else if (image.principal) {
          selector = "#imgFoto1";
        } else {
          selector = "#imgFoto" + x;
        }

        this.imagemService.getImage(image.nome).then(resBase64 => {
          let img = (<HTMLImageElement>document.querySelector(selector));
          img.src = "data:image/png;base64, "+ resBase64; 
        });
      });
      
    }).catch(error => {
      console.log(error);
      throw "As fotos do produto não foram carregadas";
    });
  }

  inserirProduto() {
    if(this.novoProduto.id){

    } else {
      let fotos64 = document.querySelectorAll('input[type="file"]');

      this.produtoService.insert(this.novoProduto).then(response => {
        this.novoProduto.id = response.id;
        this.produtos.push(this.novoProduto);
        
        for (let x = 0; x < fotos64.length; x++) {
          let file = (<HTMLInputElement>fotos64[x]);
          let fileInfo = {
            nome: '',
            produtoId: this.novoProduto.id,
            principal: false,
            banner: false
          };

          switch(file.id) {
            case 'inputFotoa':
              fileInfo.principal = true;
              break;
            case 'inputBanner':
              fileInfo.banner = true;
              break;
          }

          if (file != null && file.files.length > 0) {
            this.imagemService.insert(file.files[0], fileInfo)
            .then(response => {
            }).catch(error => {
              throw error;
            });
          }
        }

        this.novoProduto = new Produto();
      }).catch(err => {
        console.error(err);
      });
    }
  }
}
