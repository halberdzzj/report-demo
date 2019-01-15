import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api';
import { HomePage } from '../home/home';
import { User } from '../../app/model/model';
import { CommonProvider } from '../../providers/common';

/**
 * Generated class for the ModuleLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-module-login',
  templateUrl: 'module-login.html',
})
export class ModuleLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider, public alertCtrl: AlertController, public toastCtrl: ToastController,
    public svc: CommonProvider) {
  }
  username: string;
  password: string;
  loginUser: User;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModuleLoginPage');

  }

  login() {
    this.svc.showLoading('Please wait...');
    this.api.getUser(this.username, this.password).subscribe(data => {
      this.loginUser = data as User;
      if (this.loginUser) {
        if (this.loginUser.status == 'New') {
          // this.svc.hiderLoading();
          let pwdAlert = this.alertCtrl.create({
            title: 'New user',
            message: 'Please set your new password',
            inputs: [{
              type: 'password',
              name: 'p1',
              placeholder: 'New password'
            }, {
              type: 'password',
              name: 'p2',
              placeholder: 'Confirm your password'
            }
            ],
            buttons: [{
              text: 'Submit',
              handler: (data) => {
                if (data.p1 == data.p2) {
                  this.loginUser.password = data.p1;
                  this.svc.showLoading('Please wait...');
                  this.api.changePwd(this.loginUser).subscribe(data => {
                    if (data == 'success') {
                      this.svc.hiderLoading();
                      this.navCtrl.setRoot(HomePage, { user: this.loginUser });
                    }
                  }, err => {
                    this.svc.hiderLoading();
                    console.log(err);
                  });
                } else {
                  this.svc.hiderLoading();
                  this.toastCtrl.create({
                    message: 'Those passwords did not match'
                  }).present();
                }
              }
            }]
          });
          this.svc.hiderLoading();
          pwdAlert.present();
        } else {
          this.svc.hiderLoading();
          this.navCtrl.setRoot(HomePage, { user: this.loginUser });
        }
      } else {
        this.svc.hiderLoading();
        alert('Username or password is not correct. Please check and try again.');
      }
    }, err => {
      this.svc.hiderLoading();
      console.log(err);
    });


  }

}
