import { Component, Input } from '@angular/core';
import { User } from '../../app/model/model';
import { ApiProvider } from '../../providers/api';
import { ModalController, AlertController } from 'ionic-angular';
import { NewUserPage } from '../../app/modal/new-user/new-user';
import { CommonProvider } from '../../providers/common';

/**
 * Generated class for the UserMgnComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-mgn',
  templateUrl: 'user-mgn.html'
})
export class UserMgnComponent {
  @Input() loginuser: User;


  users: User[];

  constructor(public api: ApiProvider, public modalCtrl: ModalController, public alertCtrl: AlertController, public svc: CommonProvider) {
    this.loadUsers();
  }

  loadUsers() {
    this.svc.showLoading('Please wait...');
    this.api.getAllUsers().subscribe(data => {
      this.svc.hiderLoading();
      this.users = data as User[];
    }, err => {
      this.svc.hiderLoading();
      console.log(err);
    });
  }

  newUser() {
    console.log('Hello')
    let modal = this.modalCtrl.create(NewUserPage);
    modal.present();

    modal.onDidDismiss(() => {
      this.loadUsers();
    })

  }

  removeUser(user) {
    this.alertCtrl.create({
      title: 'Remove user',
      message: 'Are you sure to remove the user?',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            this.svc.showLoading('Please wait...');
            this.api.removeUser(user).subscribe(() => {
              this.svc.hiderLoading();
              this.loadUsers();
            }, err => {
              this.svc.hiderLoading();
              console.log(err);
            });
          }
        }
      ]
    }).present();
  }


}
