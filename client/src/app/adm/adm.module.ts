import { AuthGuardService } from './../guards/auth.guard.service';
import { ImagemComponent } from './painel/imagem/imagem.component';
import { OfertaComponent } from './painel/oferta/oferta.component';
import { ProdutosComponent } from './painel/produtos/produtos.component';
import { FormsModule } from '@angular/forms';
import { AdmComponent } from './adm.component';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const admRoutes: Routes = [
  { path: 'adm',
    children: [{
      path: '',
      pathMatch: 'full',
      component: LoginComponent
    },{
      path: 'painel',
      children: [{
          path: '',
          pathMatch: 'full',
          component: PainelComponent,
          canActivate: [AuthGuardService]
        },{
          path: 'produtos',
          component: ProdutosComponent,
          canActivate: [AuthGuardService]
        },
        {
          path: 'imagens',
          component: ImagemComponent,
          canActivate: [AuthGuardService]
        },
        {
          path: 'ofertas',
          component: OfertaComponent,
          canActivate: [AuthGuardService]
        }]
      }]
  },
]; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(admRoutes),
    FormsModule
  ],
  declarations: [
    LoginComponent,
    ImagemComponent,
    OfertaComponent,
    ProdutosComponent,
    PainelComponent,
    AdmComponent
  ],
  exports:[
    RouterModule,
    AdmComponent
  ]
})
export class AdmModule { }
