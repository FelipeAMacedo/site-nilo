import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let clName = 'row collapsable';

    if (event.target.innerWidth < 769) {
      document.getElementsByClassName(clName)[0].className = clName + ' collapse';
    } else {
      document.getElementsByClassName(clName)[0].className = clName;
    }
  }


  constructor() { }

  ngOnInit() {
    console.log(window.innerWidth);
  }
}
