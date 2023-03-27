import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";

import {Persona} from "../../modelo/Persona";
import {PersonaService} from "../../servicios/persona.service";
import Swal from "sweetalert2";
import {FormControl, FormGroup} from "@angular/forms";
import {UsuarioService} from "../../servicios/usuario.service";
import {Usuario} from "../../modelo/Usuario";
import {LogueoService} from "../../servicios/logueo.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  formAct = new FormGroup({
    email: new FormControl(),
    contrasenia: new FormControl(),
    nombre: new FormControl(),
    apellido: new FormControl(),
    calle: new FormControl(),
    altura: new FormControl(),
    localidad: new FormControl(),
    telContacto : new FormControl(),
    plantPart : new FormControl()

  });
  datosPersona : Persona = {
    nombre: "",
    apellido: "",
    calle: "",
    altura: "",
    localidad: "",
    telContacto: "",
    plantacionParticular: []
  }

  email: string;
  contrasenia: string;
  nombre: string;
  apellido: string;
  calle: string;
  altura: string;
  localidad: string;
  telContacto: string;
  registrado: Persona;

  valorLocalStorage: any;
  valorLocalStorage2: any;

  constructor(private router: Router, private personaService : PersonaService, private usuarioService : UsuarioService,
              public servicioLogueo: LogueoService) { }

  ngOnInit() {
    this.valorLocalStorage = localStorage.getItem('persona');
    this.valorLocalStorage2 = localStorage.getItem("usuario");
    this.personaService.obtenerDatosPersona(parseInt(this.valorLocalStorage))
      .subscribe(datos =>{
        this.datosPersona = datos;
      })


  }

  actualizar() {
    const actualizado = {
        nombre: this.formAct.get('nombre').value,
        apellido: this.formAct.get('apellido').value,
        calle: this.formAct.get('calle').value,
        altura: this.formAct.get('altura').value,
        localidad: this.formAct.get('localidad').value,
        telContacto: this.formAct.get('telContacto').value

    }

    this.personaService.actualizarDatosPersonas(this.valorLocalStorage, actualizado)
      .subscribe( datos =>{
        this.registrado = datos;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Datos actualizados correctamente!',
          showConfirmButton: false,
          timer: 1500
        });
      })

  }

  eliminar() {
    this.usuarioService.eliminarUsuario(parseInt(this.valorLocalStorage2))
      .subscribe( () => console.log('Usuario eliminado'),
      error => console.error(error)
      );
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cuenta eliminada correctamente!',
        showConfirmButton: false,
        timer: 1500
      });

      localStorage.removeItem("usuario");
      localStorage.removeItem("persona");

    this.router.navigate(["/index"]);
    this.servicioLogueo.logueado = false;

  }
}
