import { FrontComponent } from './front/front.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FrontModule } from './front/front.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: FrontComponent}
]; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FrontModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
