import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
