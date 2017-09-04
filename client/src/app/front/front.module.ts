import { ImagemService } from './../services/imagem.service';
import { OfertaService } from './../services/oferta.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContatoService } from './contato/contato.service';
import { SobreComponent } from './sobre/sobre.component';
import { ProdutoService } from './../services/produto.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FrontComponent } from './front.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { ProdutoComponent } from './produto/produto.component';

const frontRoutes: Routes = [
  {path: '', component: FrontComponent, 
      children: [
        {path: 'sobre-nos', component: SobreComponent},
        {path: 'contato', component: ContatoComponent},
        {path: 'produtos/:categoria', component: ProdutosComponent},
        // {path: ':id', component: ProdutoComponent},
        {path: 'produtos', component: ProdutosComponent},
        {path: '', component: HomeComponent}
  ]}
]; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(frontRoutes)
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    FrontComponent,
    ProdutosComponent,
    HomeComponent,
    ContatoComponent,
    SobreComponent,
    ProdutoComponent
  ],
  exports: [
    FrontComponent
  ],
  providers: [ProdutoService, ContatoService, OfertaService, ImagemService]
})
export class FrontModule { }
