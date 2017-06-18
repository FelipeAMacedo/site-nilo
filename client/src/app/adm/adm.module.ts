import { FormsModule } from '@angular/forms';
import { AdmComponent } from './adm.component';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const admRoutes: Routes = [
  {path: 'adm/painel', component: PainelComponent},
  {path: 'adm', component: LoginComponent}
]; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(admRoutes),
    FormsModule
  ],
  declarations: [
    PainelComponent,
    LoginComponent,
    AdmComponent
  ],
  exports:[
    AdmComponent
  ]
})
export class AdmModule { }
