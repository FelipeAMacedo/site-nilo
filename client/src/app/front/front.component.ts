import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  numbers = [1,2,3,4,5,6,7,8];

  constructor() { }

  ngOnInit() {
  }

}
