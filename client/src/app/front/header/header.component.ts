import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let clName = 'navbar-toggler';

    // Previous width: 769
    if (event.target.innerWidth <= 991) {
      document.getElementsByClassName(clName)[0].classList.remove('collapse');
      document.getElementById('navbarCollapse').className = 'navbar-toggleable-md collapse';
    } else {
      document.getElementsByClassName(clName)[0].className = clName + ' collapse';
      document.getElementById('navbarCollapse').classList.remove('collapse');
    }
  }
  
  constructor() { }

  ngOnInit() {
  }
}
