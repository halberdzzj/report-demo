import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Report } from '../../model/model';
import { storage } from 'firebase';
import { CommonProvider } from '../../../providers/common';

/**
 * Generated class for the ReportDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report-detail',
  templateUrl: 'report-detail.html',
})
export class ReportDetailPage {
  reportDetail: Report;

  constructor(public navCtrl: NavController, public navParams: NavParams, public svc: CommonProvider) {
    this.reportDetail = this.navParams.get('data');
    this.getImgUrl();
    // console.log(data)

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ReportDetailPage');
  }
  imgUrl: string;


  getImgUrl() {
    if (this.reportDetail.img_name) {
      this.svc.showLoading('Please wait...');
      let imgFile = storage().ref(this.reportDetail.img_name);
      imgFile.getDownloadURL().then((url) => {
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function (event) {
          var blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
        this.svc.hiderLoading();
        this.imgUrl = url;

        // console.log(url)

      })
    }

  }
}
