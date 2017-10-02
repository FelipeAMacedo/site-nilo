import { ImagemService } from './../../../services/imagem.service';
import { Produto } from './../../../model/produto';
import { ProdutoService } from './../../../services/produto.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  mostrar = true;
  // fotos = {};
  produtos = [];
  novoProduto: Produto = new Produto();
  imgUrl = "/assets/images/produtos/";

  @ViewChild('produtoForm') form;

  constructor(private produtoService: ProdutoService, private imagemService: ImagemService) { }

  ngOnInit() {
    this.produtoService.getAll().then(lista => this.produtos = lista);
  }

  toggleInsert() {
    this.mostrar = !this.mostrar;
  }

  addFoto(event, id, element) {
    // this.fotos[id] = event.srcElement.files[0];

    // if (this.fotos[id] || this.fotos[id] != null) {

      let reader = new FileReader();

      reader.onloadend = function () {
        element.src = reader.result;
      }

      reader.readAsDataURL(event.srcElement.files[0]);
    // }
  }

  apagarImagem(element, id, inputFoto) {
    // this.fotos[id] = ''; 
    inputFoto.value = null;
    element.parentElement.querySelector('img').src = '';
  }

  deletar(id) {
    this.produtoService.remove(id).then(response => {
      this.produtoService.getAll().then(lista => this.produtos = lista);

      this.limparFormulario();

    }).catch(err => {
      throw new Error('O objeto não foi removido');
    });
  }

  inserirProduto() {
    let fotos64 = document.querySelectorAll('input[type="file"]');

    if (this.novoProduto.preco) {
      if (this.novoProduto.preco.toString().indexOf(',') !== -1) {
        this.novoProduto.preco = parseFloat(this.novoProduto.preco.toString().replace(",", "."));
      }
    }

    this.produtoService.insert(this.novoProduto).then(response => {
      // this.novoProduto.id = response.id;
      // this.produtos.push(this.novoProduto);

      for (let x = 0; x < fotos64.length; x++) {
        let file = (<HTMLInputElement>fotos64[x]);
        let fileInfo = {
          nome: '',
          produtoId: response.id,
          posicao: 0
        };

        switch (file.id) {
          case 'inputFotoa':
            fileInfo.posicao = 1;
            break;
          case 'inputBanner':
            fileInfo.posicao = 20;
            break;
          default:
            fileInfo.posicao = x + 2;
            break;
        }

        if (file != null && file.files.length > 0) {
          this.imagemService.insert(file.files[0], fileInfo)
          .then(resposta => {
            // this.limparFormulario();
            // let alerta = document.getElementsByClassName('alert')[0];
            // alerta.classList.add('alert-success');
            // alerta.classList.add('show');

            // document.getElementById('insertProdSuccess').classList.add('show');
            // setTimeout(() => {
            //   alerta.classList.remove('show');
            //   document.getElementById('insertProdSuccess').classList.remove('show');
            // }, 4000);
          })
          .catch(error => {
            // this.limparFormulario();
            throw error;
          });
        }

        this.limparFormulario();

        let alerta = document.getElementsByClassName('alert')[0];
        alerta.classList.add('alert-success');
        alerta.classList.add('show');
  
        document.getElementById('insertProdSuccess').classList.add('show');
        setTimeout(() => {
          alerta.classList.remove('show');
          document.getElementById('insertProdSuccess').classList.remove('show');
        }, 4000);

        this.produtoService.getAll()
        .then(lista => {
          this.produtos = lista;
        })
        .catch(listError => {
          throw listError;
        });
      }
    }).catch(err => {
      throw new Error(err);
    });
  }

  mostrarMensagem() {
    
  };

  limparFormulario() {
    let inputText = document.querySelectorAll('input[type="text"]');
    let inputFile = document.querySelectorAll('input[type="file"]');
    let inputCheckBox = document.getElementById('mostrarProduto');

    let imgs = document.querySelectorAll('img');

    // this.fotos = {};
    this.novoProduto = new Produto();

    // for (let x = 0; x < inputText.length; x++) {
    //   let input = (<HTMLInputElement>inputText[x])
    //   input.value = '';
    // };

    for (let x = 0; x < inputFile.length; x++) {
      let input = (<HTMLInputElement>inputFile[x]);
      input.value = null;
      // input.files[0] = null;
    };

    for (let x = 0; x < imgs.length; x++) {
      let input = (<HTMLImageElement>imgs[x]);
      input.src = '';
    };

    this.form.reset();

    inputCheckBox.click();
    window.scrollTo(0, 0);
  }

  selecionar(produto) {

    this.limparFormulario();

    Object.assign(this.novoProduto, produto);
    this.imagemService.findByProdutoId(produto.id).then(response => {

      response.forEach(image => {
        let selector = '#img';
        if (image.posicao == 20) {
          selector += 'Banner';
        } else {
          selector += 'Foto' + image.posicao;
        }

        let img = (<HTMLImageElement>document.querySelector(selector));
        img.src = this.imgUrl + image.nome;

        // this.imagemService.getImage(image.nome).then(resBase64 => {
        //   let img = (<HTMLImageElement>document.querySelector(selector));
        //   img.src = 'data:image/png;base64, ' + resBase64;
        // });
      });
    }).catch(error => {
      throw new Error('As fotos do produto não foram carregadas');
    });
  }
}
