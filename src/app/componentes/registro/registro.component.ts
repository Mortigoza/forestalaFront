import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {validarEspaciosBlanco} from "../../validaciones/espaciosBlancos";
import {Usuario} from "../../modelo/Usuario";
import Swal from "sweetalert2";
import {UsuarioService} from "../../servicios/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  formRegister: FormGroup;
  minChar:number = 8;
  ojo: any;


  email: string;
  contrasenia: string;
  nombre: string;
  apellido: string;
  calle: string;
  altura: string;
  localidad: string;
  telContacto: string;


  constructor(private formBuilder: FormBuilder, private service: UsuarioService, private router: Router) {

  }


  ngOnInit(): void {
    this.formRegister = this.initForm();
  }
  registrarse(): void{
    let Persona;
    const registrado: Usuario = {
      email: this.formRegister.get('email').value,
      contrasenia: this.formRegister.get('password').value,
      persona: Persona = {
        nombre: this.formRegister.get('nombre').value,
        apellido: this.formRegister.get('apellido').value,
        calle: this.formRegister.get('calle').value,
        altura: this.formRegister.get('altura').value,
        localidad: this.formRegister.get('localidad').value,
        telContacto: this.formRegister.get('telContacto').value
      }
    }
    // me traigo los datos ingresados en el form

    // this.email = this.formRegister.value.email;
    // this.contrasenia = this.formRegister.value.password;
    // this.nombre = this.formRegister.value.nombre;
    // this.apellido = this.formRegister.value.apellido;
    // this.calle = this.formRegister.value.calle;
    // this.altura = this.formRegister.value.altura;
    // this.localidad = this.formRegister.value.localidad;
    // this.telContacto = this.formRegister.value.telContacto;

    // creo un objeto de tipo Usuario
    // let userRegister: Usuario = {
    //   email: this.email,
    //   contrasenia: this.contrasenia,
    //   persona : {
    //     nombre: this.nombre,
    //     apellido: this.apellido,
    //     calle: this.calle,
    //     altura: this.altura,
    //     localidad: this.localidad,
    //     telContacto: this.telContacto
    //   }
    // }

    this.service.registrarUsuario(registrado)
      .subscribe({
        next:res => {
          localStorage.setItem("usuario", res.idUsuario.toString())
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Te has registrado correctamente! Ahora podés loguearte.',
              showConfirmButton: false,
              timer: 2500
            });
            this.router.navigate(["/login"]);
        }
      })


  }

  //validaciones básicas del lado del front
  initForm():FormGroup{
    //declaro las prop que tiene mi form
    return this.formBuilder.group({
      email:['', [Validators.required,
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), validarEspaciosBlanco]
      ],
      password:['', [Validators.required, Validators.minLength(this.minChar), validarEspaciosBlanco]],
      nombre: ['', Validators.required, validarEspaciosBlanco],
      apellido: ['', Validators.required, validarEspaciosBlanco],
      calle: ['', Validators.required, validarEspaciosBlanco],
      altura: ['', Validators.required, validarEspaciosBlanco],
      localidad: ['', Validators.required, validarEspaciosBlanco],
      telContacto: ['', Validators.required, validarEspaciosBlanco]
    })
  }

  // método para ocultar o mostrar la contraseña
  ojito() {
    this.ojo = document.querySelector("#passwordConOjo");

    if(this.ojo.type == 'password') {
      this.ojo.type = 'text';
    } else {
      this.ojo.type = 'password';
    }
  }
}
