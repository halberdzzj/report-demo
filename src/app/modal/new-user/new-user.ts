import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiProvider } from '../../../providers/api';
import { CommonProvider } from '../../../providers/common';



@IonicPage()
@Component({
  selector: 'page-new-user',
  templateUrl: 'new-user.html',
})
export class NewUserPage {

  constructor(public viewCtrl: ViewController, public toastCtrl: ToastController, public navCtrl: NavController,
    public api: ApiProvider, public navParams: NavParams, public formBuilder: FormBuilder,
    public svc: CommonProvider) {
    this.initNewUserForm();
  }
  newUserForm: FormGroup;

  ionViewDidLoad() {
    // console.log('ionViewDidLoad NewUserPage');
  }

  initNewUserForm() {
    this.newUserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      userName: ['', Validators.required]
    });
  }

  addUser() {
    let newUser = this.newUserForm.value;
    this.svc.showLoading('Please waiting...');
    this.api.addUser(newUser).subscribe(data => {
      this.svc.hiderLoading();
      if (data == 'duplicate') {
        alert('Duplicate username.');
      } else if (data == "success") {
        this.toastCtrl.create({
          message: 'User ' + newUser.userName + ' created.',
          position: 'top',
          duration: 2000
        }).present();
        this.viewCtrl.dismiss();
      }
      // console.log(data);
    });
    // console.log(newUser);
  }

}
