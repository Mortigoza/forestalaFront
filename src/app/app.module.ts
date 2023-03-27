import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { EjemplaresComponent } from './componentes/ejemplares/ejemplares.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {URL_SERVICIO} from "./servicios/usuario.service";
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";
import {Router} from "@angular/router";
import { PerfilComponent } from './componentes/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegistroComponent,
    EjemplaresComponent,
    FormulariosComponent,
    NavbarComponent,
    FooterComponent,
    PerfilComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [{provide: URL_SERVICIO, useValue: 'http://localhost:8080'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
