import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./componentes/index/index.component";
import {LoginComponent} from "./componentes/login/login.component";
import {RegistroComponent} from "./componentes/registro/registro.component";
import {EjemplaresComponent} from "./componentes/ejemplares/ejemplares.component";
import {FormulariosComponent} from "./componentes/formularios/formularios.component";
import {PerfilComponent} from "./componentes/perfil/perfil.component";

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'ejemplares', component: EjemplaresComponent},
  {path: 'formularios', component: FormulariosComponent},
  {path: 'index', component: IndexComponent},
  {path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
