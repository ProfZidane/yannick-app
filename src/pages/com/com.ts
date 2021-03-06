import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VocalComPage } from '../vocal-com/vocal-com';

/**
 * Generated class for the ComPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-com',
  templateUrl: 'com.html',
})
export class ComPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComPage');
  }

  selectCom(com) {
    console.log(com);
    if (com === 'vocal') {
      this.navCtrl.push(VocalComPage);
    }
  }
}
