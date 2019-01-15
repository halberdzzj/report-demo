
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class CommonProvider {

  constructor(public loadingCtrl: LoadingController) {
  }
  loader: any;
  showLoading(words) {
    this.loader = this.loadingCtrl.create({
      content: words,
    });
    this.loader.present();
  }

  hiderLoading() {
    if (this.loader) {
      this.loader.dismiss();
      this.loader = null;
    }
  }





}
