import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../servicios/usuario.service";
import {Usuario} from "../../modelo/Usuario";
import {Router} from "@angular/router";
import {LogueoService} from "../../servicios/logueo.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  usuario : Usuario;

  constructor(private service : UsuarioService, private router: Router, public servicio: LogueoService) {

  }

  ngOnInit(): void {
    if(localStorage.getItem("usuario") != null){
      this.servicio.logueado = true;
    }

  }

  desloguear() {
    this.servicio.logueado = false;
    localStorage.removeItem("usuario");
    localStorage.removeItem("idPlantacionesParticulares")
    localStorage.removeItem("persona")
    this.ngOnInit();
  }



}
