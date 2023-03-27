import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {URL_SERVICIO} from "./usuario.service";
import {Observable} from "rxjs";
import {PlantacionParticular} from "../modelo/PlantacionParticular";

@Injectable({
  providedIn: 'root'
})
export class PlantacionParticularService {

  private url:string= this.urlS+"/plantaciones-particulares";

  constructor(private httpClient :HttpClient,
              @Inject(URL_SERVICIO)private urlS:string) { }

  private getHttpOptions(){
    return {
      headers : new HttpHeaders({
        'content-type':'application/json'
      })
    };
  }

  solicitarPlantPart(id_personas: number, plantPart: PlantacionParticular): Observable<PlantacionParticular> | null {
    return this.httpClient.post<PlantacionParticular>(`http://localhost:8080/plantaciones-particulares/${id_personas}`,plantPart,this.getHttpOptions())
  }
}
