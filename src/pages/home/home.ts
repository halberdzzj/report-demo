import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CommonProvider } from '../../providers/common';
import { User } from '../../app/model/model';
import { ModuleLoginPage } from '../module-login/module-login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isAdmin: boolean = false;
  displayName: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public svc: CommonProvider) {
    this.loginUser = this.navParams.get('user') as User;
    this.displayName = this.loginUser.first_name + ' ' + this.loginUser.last_name;
    if (this.loginUser.role == 'admin') {
      this.isAdmin = true;
    }

    // console.log(this.loginUser)
  }
  loginUser: User = null;
  module: string = 'reportMgn';
  toUserMgn() {
    this.module = 'userMgn';
  }

  toReportMgn() {
    this.module = 'reportMgn';
  }

  logout() {
    this.navCtrl.setRoot(ModuleLoginPage);
  }
}
