import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*
  Generated class for the BuscaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BuscaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello BuscaProvider Provider');
  }

  obtenerDatos(){
    return this.http.get('https://my-json-server.typicode.com/HaibuSolutions/prueba-tecnica-sf/user')
  }

}
