import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuscaProvider } from '../../providers/busca/busca';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  empleados
  infoempleado = "InfoEmpleadoPage";
  paramsParaInfoEmpleado = {
    nombre : "1nombre",
    apellido : "2apellido"  
  };

  constructor(public navCtrl: NavController,public busca:BuscaProvider) {}

  ionViewDidLoad(){
    this.busca.obtenerDatos()
    .subscribe(
      (data)=>{this.empleados = data;},
      (error)=>{console.log(error);}
    )


  }

}
