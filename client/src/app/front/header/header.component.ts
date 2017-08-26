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
    // if (event.target.innerWidth <= 769) {
    //   document.getElementsByClassName(clName)[0].classList.remove('collapse');
    //   // document.getElementById('navbarCollapse').className = 'navbar-toggleable-md collapse';
    // } else {
    //   document.getElementsByClassName(clName)[0].className = clName + ' collapse';
    //   document.getElementById('navbarCollapse').classList.remove('collapse');
    // }
  }

	paginas = [
    	{ nome: 'PEDRA', link: 'pedra' },
    	{ nome: 'BLOCOS', link: 'blocos' },
		{ nome: 'CIMENTO', link: 'cimento' },
    	{ nome: 'TELHAS', link: 'telhas' },
        { nome: 'AREIA', link: 'areia' },
		{ nome: 'TIJOLO', link: 'tijolo' },
	    { nome: 'CAL', link: 'cal' },
        { nome: 'FERRAGENS', link: 'ferragens' },
		{ nome: 'FERRAMENTAS', link: 'ferramentas' },
	];
	
	paginasMenu = this.paginas.slice(0, 6);
	paginasMais = this.paginas.slice(6, this.paginas.length)

  constructor() { }

  ngOnInit() {
  }
}
