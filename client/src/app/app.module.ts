import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FrontModule } from './front/front.module';
import { AdmModule } from './adm/adm.module';

import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';

const appRoutes: Routes = [
  {path: '', component: FrontComponent}
]; 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FrontModule,
    AdmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
