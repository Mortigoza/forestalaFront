import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {validarEspaciosBlanco} from "../../validaciones/espaciosBlancos";
import {UsuarioService} from "../../servicios/usuario.service";
import {Usuario} from "../../modelo/Usuario";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import Swal from "sweetalert2";
import {catchError, throwError} from "rxjs";
import {LogueoService} from "../../servicios/logueo.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formLogin: FormGroup;
  minChar:number = 8;
  ojo:any;



  constructor(private formBuilder: FormBuilder, public service: LogueoService, private router: Router) {

  }
  ngOnInit(): void {
    this.formLogin = this.initForm();
    }

  email: string;
  contrasenia: string;

  logueado : boolean = false;
  iniciarSesion(): void{
    this.email = this.formLogin.value.email;
    this.contrasenia = this.formLogin.value.password;

    let userLogin: Usuario = {
      email: this.email,
      contrasenia: this.contrasenia
    }

    this.service.sesion(userLogin);


  }

  initForm():FormGroup{
    //declaro las prop que tiene mi form
    return this.formBuilder.group({
      email:['', [Validators.required,
        Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/), validarEspaciosBlanco]
      ],
      password:['', [Validators.required, Validators.minLength(this.minChar), validarEspaciosBlanco]]
    })
  }

  mostrarPass() {
    this.ojo = document.querySelector("#passwordConOjo2");

    if(this.ojo.type == 'password') {
      this.ojo.type = 'text';
    } else {
      this.ojo.type = 'password';
    }
  }
}
