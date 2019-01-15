import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ApiProvider } from '../../providers/api';
import { ModalController } from 'ionic-angular';
import { NewReportPage } from '../../app/modal/new-report/new-report';
import { User, Report } from '../../app/model/model';
import { ReportDetailPage } from '../../app/modal/report-detail/report-detail';
import { CommonProvider } from '../../providers/common';

/**
 * Generated class for the ReportMgnComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'report-mgn',
  templateUrl: 'report-mgn.html'
})
export class ReportMgnComponent {
  @Input() loginuser: User;

  constructor(public api: ApiProvider, public modalCtrl: ModalController, public svc: CommonProvider) {
  }

  reports: any[];

  createReport() {
    // console.log('Hello')
    let modal = this.modalCtrl.create(NewReportPage, { data: this.loginuser });
    modal.present();

    modal.onDidDismiss(() => {
      this.svc.showLoading('Please wait...');
      this.api.getReportsById(this.loginuser.id).subscribe(data => {
        this.svc.hiderLoading();
        this.reports = data as Report[];
      }, err => {
        this.svc.hiderLoading();
        console.log(err);
      });
    })
  }

  ngOnInit() {
    // console.log(this.loginuser);
    this.loadReports();
  }

  loadReports() {
    this.svc.showLoading('Please wait...');
    if (this.loginuser.role != 'user') {
      this.api.getAllReports().subscribe(data => {
        this.svc.hiderLoading();
        this.reports = data as Report[];
      }, err => {
        this.svc.hiderLoading();
        console.log(err);
      });
    } else {
      this.api.getReportsById(this.loginuser.id).subscribe(data => {
        this.svc.hiderLoading();
        this.reports = data as Report[];
      }, err => {
        this.svc.hiderLoading();
        console.log(err);
      });
    }
  }

  toReportDetail(re) {
    let modal = this.modalCtrl.create(ReportDetailPage, { data: re });
    modal.present();


  }

}
