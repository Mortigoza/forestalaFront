import { Injectable } from '@angular/core';
import {catchError, Observable, Subject, throwError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import Swal from "sweetalert2";
import {UsuarioService} from "./usuario.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LogueoService {

  private loggedIn = new Subject<boolean>();

  constructor(private service : UsuarioService, private router : Router) { }

  // get isLoggedIn(): Observable<boolean> {
  //   return this.loggedIn.asObservable();
  // }
  //
  // login() {
  //   // Lógica para iniciar sesión
  //   this.loggedIn.next(true);
  // }
  //
  // logout() {
  //   // Lógica para cerrar sesión
  //   this.loggedIn.next(false);
  // }

  invalidos: string;
  public logueado: boolean;
  sesion(userLogin){

    this.service.validarUsuario(userLogin).pipe(
      catchError((error: HttpErrorResponse) => {
    if (error.status === 404) {
    this.invalidos ='*Credenciales incorrectas.';
  } else {
    this.invalidos = 'Ha ocurrido un error. Vuelva a intentar.';
  }
  return throwError(this.invalidos);
  }
  )
  ).subscribe({
    next:res => {
      if (res == null){
        console.log("Dato incorrecto");
      } else {
        localStorage.setItem("usuario", res.idUsuario.toString())
        localStorage.setItem("persona", res.persona.idPersonas.toString())
        this.logueado = true;


        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Has ingresado!',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(["/formularios"]);}

    }
  })
  }
}
