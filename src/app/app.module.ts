import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModuleLoginPage } from '../pages/module-login/module-login';
import { ApiProvider } from '../providers/api';
import { HttpClientModule } from '@angular/common/http';
import { CommonProvider } from '../providers/common';
import { UserMgnComponent } from '../components/user-mgn/user-mgn';
import { ReportMgnComponent } from '../components/report-mgn/report-mgn';
import { NewReportPage } from './modal/new-report/new-report';
import { NewUserPage } from './modal/new-user/new-user';
import { ReportDetailPage } from './modal/report-detail/report-detail';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import * as firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyB6-P-CPqzGN-ADjtPFW563kO6qFKVoj_s",
  authDomain: "fault-report-de307.firebaseapp.com",
  databaseURL: "https://fault-report-de307.firebaseio.com",
  projectId: "fault-report-de307",
  storageBucket: "fault-report-de307.appspot.com",
  messagingSenderId: "155078496831"
}
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModuleLoginPage,
    UserMgnComponent,
    ReportMgnComponent,
    NewReportPage,
    NewUserPage,
    ReportDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule
    // AngularFireModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModuleLoginPage,
    NewReportPage,
    NewUserPage,
    ReportDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider,
    CommonProvider
  ]
})
export class AppModule { }
