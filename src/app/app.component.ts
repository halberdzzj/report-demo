import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ModuleLoginPage } from '../pages/module-login/module-login';
// import { AngularFireModule } from 'angularfire2';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = ModuleLoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // var firebaseConfig = {
      //   apiKey: "AIzaSyB6-P-CPqzGN-ADjtPFW563kO6qFKVoj_s",
      //   authDomain: "fault-report-de307.firebaseapp.com",
      //   databaseURL: "https://fault-report-de307.firebaseio.com",
      //   projectId: "fault-report-de307",
      //   storageBucket: "fault-report-de307.appspot.com",
      //   messagingSenderId: "155078496831"
      // }
      // AngularFireModule.initializeApp(firebaseConfig);
    });
  }
}

