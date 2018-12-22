import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuscaProvider } from '../../providers/busca/busca';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  empleados:any;
  items:any;
  infoempleado = "InfoEmpleadoPage";

  constructor(public navCtrl: NavController,public busca:BuscaProvider) {
    this.initializeItems();
  }

  ionViewDidLoad(){
    this.busca.obtenerDatos()
    .subscribe(
      (data)=>{this.empleados = data;},
      (error)=>{console.log(error);}
    )


  }

  initializeItems(){
    this.items=this.empleados;
  }

  getItems(ev:any){
    this.initializeItems();

    const val = ev.target.value;

    if (val && val.trim() != ' '){
      this.empleados = this.empleados.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

}
