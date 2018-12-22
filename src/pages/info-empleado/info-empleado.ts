import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoEmpleadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-empleado',
  templateUrl: 'info-empleado.html',
})
export class InfoEmpleadoPage {

  objetoRecibido: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.objetoRecibido = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoEmpleadoPage');
  }

}
