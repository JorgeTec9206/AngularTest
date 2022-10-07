import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccionesService {

  private urlgetProductos = environment.api + 'productos';

  constructor(public http: HttpClient) { }

  public getProductos(){
    return this.http.get(this.urlgetProductos);
  }
}
