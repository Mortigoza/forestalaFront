import {Inject, Injectable, InjectionToken} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {throwError} from "rxjs";
import {Persona} from "../modelo/Persona";



@Injectable({
  providedIn: 'root'
})
export class PersonaService {


  constructor(private httpClient:HttpClient) { }


  obtenerDatosPersona(id_personas:number){
    return  this.httpClient.get<Persona>(`http://localhost:8080/personas/${id_personas}`);
  }

  actualizarDatosPersonas(id_persona: number, persona : Persona){
    return this.httpClient.put<Persona>(`http://localhost:8080/personas/update/${id_persona}`, persona);
  }




}
