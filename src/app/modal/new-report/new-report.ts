import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiProvider } from '../../../providers/api';
import { User } from '../../model/model';
import { storage } from 'firebase';
import { CommonProvider } from '../../../providers/common';


@IonicPage()
@Component({
  selector: 'page-new-report',
  templateUrl: 'new-report.html',
})
export class NewReportPage {
  fileName: string;

  user: User;
  count: number;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder, public api: ApiProvider,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public svc: CommonProvider) {
    this.user = this.navParams.get('data') as User;
    this.svc.showLoading('Please wait...');
    this.api.getReportsById(this.user.id).subscribe((data) => {
      this.svc.hiderLoading();
      let array = data as any[];
      this.count = array.length;
    })
    this.initNewForm();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad NewReportPage');
  }

  attachFile: any = {};

  onAttachFileChange(event) {
    let file = event.target.files[0];
    if (file.type.split('/')[0] != 'image') {
      this.toastCtrl.create({
        message: 'Please select an image file.',
        duration: 2000,
        position: 'top'
      }).present();
      return
    }
    let nameArray = file.name.split('.');
    this.imgPostfix = nameArray[nameArray.length - 1];
    this.fileName = file.name;
    console.log(file.name, this.imgPostfix);
    if (!file) {
      return;
    } else {
      // this.isAttachFileUpdated = true;

      this.attachFile = file;
      // upload
    }
  }

  imgPostfix: string;
  newReportForm: FormGroup

  initNewForm() {
    this.newReportForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required]
    });
  }


  submitNewReport() {
    let formValue = this.newReportForm.value;
    let imgName = '';
    if (this.attachFile) {
      imgName = this.user.id + '-' + this.count + '.' + this.imgPostfix;
    }
    let report = {
      title: formValue.title,
      description: formValue.description,
      location: formValue.location,
      user_id: this.user.id,
      img_name: imgName
    }
     this.svc.showLoading('Please wait...');
    this.api.addReport(report).subscribe(data => {
      // if (data == 'success') {
      this.uploadImgName = data as string;
      if (this.attachFile) {
        this.uploadImg();
      }
      this.viewCtrl.dismiss();
      // }
    }, err => {
      console.log(err);
    });
  }

  uploadImgName: string;
  uploadImg() {
     this.svc.showLoading('Please wait...');
    const imgs = storage().ref(this.uploadImgName);
    imgs.put(this.attachFile).then((snapshoot) => {
      // console.log(snapshoot)
      // hide loader
      this.svc.hiderLoading();
    })
  }

}
