import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Usuario} from "../modelo/Usuario";
import {Persona} from "../modelo/Persona";

export const URL_SERVICIO = new InjectionToken<string>('');

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url:string= this.urlS+"/usuarios";
  constructor(private httpClient :HttpClient,
              @Inject(URL_SERVICIO)private urlS:string) { }

  private getHttpOptions(){
    return {
      headers : new HttpHeaders({
        'content-type':'application/json'
      })
    };
  }

  private handlerException(error: HttpErrorResponse){
    //console.log(error);
    if(error.error instanceof ErrorEvent){
      console.log('Error del front ' + error.error.message)
    } else {
      console.log('Error del back ' + error.error.message + error.error.status);
    }
    return throwError('Error de comunicacion');
  }

  obtenerTodos():Observable<Array<Usuario>>{
    return this.httpClient
      .get<Array<Usuario>>(this.url)
      .pipe(
        catchError(this.handlerException)
      );
  }

  obtenerPorId(idUsuario:number):Observable<Usuario>{
    return this.httpClient
      .get<Usuario>(this.url+"/usuarios/"+idUsuario);
  }

  comprobarSesion : boolean = false;
  validarUsuario(usuario : Usuario):Observable<Usuario> | null {
    return this.httpClient.post<Usuario>(this.url+"/login",usuario,this.getHttpOptions())
  }

  registrarUsuario(usuario: Usuario): Observable<Usuario> | null {
    return this.httpClient.post<Usuario>(`http://localhost:8080/usuarios`,usuario,this.getHttpOptions())
  }

  eliminarUsuario(idUsuario : number) : Observable<any> {
    return this.httpClient.delete(`http://localhost:8080/usuarios/borrar/${idUsuario}`)
  }







}


