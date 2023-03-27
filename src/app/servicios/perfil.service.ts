import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { }

  // getDataById(id: number): Observable<any> {
  //   return this.http.get(`http://localhost:8080/personas/${id}`);
  // }

  // updateData(id: number, data: any): Observable<any> {
  //   return this.http.put(`http://localhost:8080/personas/update/${id}`, data);
  // }

}
