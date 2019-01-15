webpackJsonp([4],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ModuleLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModuleLoginPage = /** @class */ (function () {
    function ModuleLoginPage(navCtrl, navParams, api, alertCtrl, toastCtrl, svc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.svc = svc;
    }
    ModuleLoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModuleLoginPage');
    };
    ModuleLoginPage.prototype.login = function () {
        var _this = this;
        this.svc.showLoading('Please wait...');
        this.api.getUser(this.username, this.password).subscribe(function (data) {
            _this.loginUser = data;
            if (_this.loginUser) {
                if (_this.loginUser.status == 'New') {
                    // this.svc.hiderLoading();
                    var pwdAlert = _this.alertCtrl.create({
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
                                handler: function (data) {
                                    if (data.p1 == data.p2) {
                                        _this.loginUser.password = data.p1;
                                        _this.svc.showLoading('Please wait...');
                                        _this.api.changePwd(_this.loginUser).subscribe(function (data) {
                                            if (data == 'success') {
                                                _this.svc.hiderLoading();
                                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], { user: _this.loginUser });
                                            }
                                        }, function (err) {
                                            _this.svc.hiderLoading();
                                            console.log(err);
                                        });
                                    }
                                    else {
                                        _this.svc.hiderLoading();
                                        _this.toastCtrl.create({
                                            message: 'Those passwords did not match'
                                        }).present();
                                    }
                                }
                            }]
                    });
                    _this.svc.hiderLoading();
                    pwdAlert.present();
                }
                else {
                    _this.svc.hiderLoading();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], { user: _this.loginUser });
                }
            }
            else {
                _this.svc.hiderLoading();
                alert('Username or password is not correct. Please check and try again.');
            }
        }, function (err) {
            _this.svc.hiderLoading();
            console.log(err);
        });
    };
    ModuleLoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-module-login',template:/*ion-inline-start:"C:\Users\zhuzh\Desktop\gsafety\fault-report-ionic\fault-report\src\pages\module-login\module-login.html"*/'<ion-content>\n  <ion-row>\n    <ion-col no-padding col-8 col-sm-8 col-xs-12 style="margin-left:auto; margin-right:auto;">\n      <ion-card id="login-board" padding style="margin-top: 10%">\n        <ion-card-title text-center style="font-size: 1.5em;">\n          Fault Report System\n        </ion-card-title>\n        <ion-card-content>\n          <ion-row style="width:100%; margin:auto">\n            <ion-col no-padding col-md-3 col-sm-12 col-xs-12 offset-md-2>\n              <ion-label>Username:</ion-label>\n            </ion-col>\n            <ion-col no-padding col-md-5 col-sm-12 col-xs-12 offset-xs-2>\n              <ion-input [(ngModel)]="username" placeholder="Enter username here"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col no-padding col-md-3 col-sm-12 col-xs-12 offset-md-2>\n              <ion-label>Password:</ion-label>\n            </ion-col>\n            <ion-col  no-padding col-md-5 col-sm-12 col-xs-12 offset-xs-2>\n              <ion-input type="password" [(ngModel)]="password" placeholder="Enter password here"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col text-center>\n              <button ion-button (click)="login()">Login</button>\n            </ion-col>\n          </ion-row>\n        </ion-card-content>\n        <!-- \n        <ion-item>\n          <ion-label>\n            Username:\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>\n          </ion-label>\n        </ion-item> -->\n\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"C:\Users\zhuzh\Desktop\gsafety\fault-report-ionic\fault-report\src\pages\module-login\module-login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* CommonProvider */]])
    ], ModuleLoginPage);
    return ModuleLoginPage;
}());

//# sourceMappingURL=module-login.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewReportPage = /** @class */ (function () {
    function NewReportPage(navCtrl, navParams, formBuilder, api, viewCtrl, toastCtrl, svc) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.api = api;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.svc = svc;
        this.attachFile = {};
        this.user = this.navParams.get('data');
        this.svc.showLoading('Please wait...');
        this.api.getReportsById(this.user.id).subscribe(function (data) {
            _this.svc.hiderLoading();
            var array = data;
            _this.count = array.length;
        });
        this.initNewForm();
    }
    NewReportPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad NewReportPage');
    };
    NewReportPage.prototype.onAttachFileChange = function (event) {
        var file = event.target.files[0];
        if (file.type.split('/')[0] != 'image') {
            this.toastCtrl.create({
                message: 'Please select an image file.',
                duration: 2000,
                position: 'top'
            }).present();
            return;
        }
        var nameArray = file.name.split('.');
        this.imgPostfix = nameArray[nameArray.length - 1];
        this.fileName = file.name;
        console.log(file.name, this.imgPostfix);
        if (!file) {
            return;
        }
        else {
            // this.isAttachFileUpdated = true;
            this.attachFile = file;
            // upload
        }
    };
    NewReportPage.prototype.initNewForm = function () {
        this.newReportForm = this.formBuilder.group({
            title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            location: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    };
    NewReportPage.prototype.submitNewReport = function () {
        var _this = this;
        var formValue = this.newReportForm.value;
        var imgName = '';
        if (this.attachFile) {
            imgName = this.user.id + '-' + this.count + '.' + this.imgPostfix;
        }
        var report = {
            title: formValue.title,
            description: formValue.description,
            location: formValue.location,
            user_id: this.user.id,
            img_name: imgName
        };
        this.svc.showLoading('Please wait...');
        this.api.addReport(report).subscribe(function (data) {
            // if (data == 'success') {
            _this.uploadImgName = data;
            if (_this.attachFile) {
                _this.uploadImg();
            }
            else {
                _this.svc.hiderLoading();
                _this.viewCtrl.dismiss();
            }
            // }
        }, function (err) {
            console.log(err);
        });
    };
    NewReportPage.prototype.uploadImg = function () {
        var _this = this;
        this.svc.showLoading('Please wait...');
        var imgs = Object(__WEBPACK_IMPORTED_MODULE_4_firebase__["storage"])().ref(this.uploadImgName);
        imgs.put(this.attachFile).then(function (snapshoot) {
            // console.log(snapshoot)
            // hide loader
            _this.svc.hiderLoading();
        });
    };
    NewReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-report',template:/*ion-inline-start:"C:\Users\zhuzh\Desktop\gsafety\fault-report-ionic\fault-report\src\app\modal\new-report\new-report.html"*/'<ion-content>\n  <header>\n    <h1 padding>New Report</h1>\n  </header>\n  <hr>\n  <form text-center [formGroup]="newReportForm" (ngSubmit)="submitNewReport()">\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating>Title:</ion-label>\n          <ion-input formControlName="title"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label floating>Location:</ion-label>\n          <ion-input formControlName="location"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating>Description:</ion-label>\n          <ion-input formControlName="description"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-10>\n        <ion-item>\n          <ion-label>\n            Upload Image:\n          </ion-label>\n          <ion-input [(ngModel)]="fileName" [ngModelOptions]="{standalone:true}" disabled></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col text-right>\n      <button ion-button item-end type="button" (click)="inputFile.click()" pading-left padding-right>\n        <ion-icon name="attach"></ion-icon>\n      </button>\n      <input type="file" #inputFile (change)="onAttachFileChange($event)" style="display: none" />\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row> -->\n      <!-- <ion-col text-center col-12> -->\n        <button type="submit" class="submitBtn" ion-button [disabled]="!newReportForm.valid">Submit</button>\n      <!-- </ion-col> -->\n    <!-- </ion-row> -->\n  </form>\n\n  <!-- <button ion-button full (click)="uploadImg()">TEST</button> -->\n</ion-content>'/*ion-inline-end:"C:\Users\zhuzh\Desktop\gsafety\fault-report-ionic\fault-report\src\app\modal\new-report\new-report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* CommonProvider */]])
    ], NewReportPage);
    return NewReportPage;
}());

//# sourceMappingURL=new-report.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewUserPage = /** @class */ (function () {
    function NewUserPage(viewCtrl, toastCtrl, navCtrl, api, navParams, formBuilder, svc) {
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.api = api;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.svc = svc;
        this.initNewUserForm();
    }
    NewUserPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad NewUserPage');
    };
    NewUserPage.prototype.initNewUserForm = function () {
        this.newUserForm = this.formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            userName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    };
    NewUserPage.prototype.addUser = function () {
        var _this = this;
        var newUser = this.newUserForm.value;
        this.svc.showLoading('Please waiting...');
        this.api.addUser(newUser).subscribe(function (data) {
            _this.svc.hiderLoading();
            if (data == 'duplicate') {
                alert('Duplicate username.');
            }
            else if (data == "success") {
                _this.toastCtrl.create({
                    message: 'User ' + newUser.userName + ' created.',
                    position: 'top',
                    duration: 2000
                }).present();
                _this.viewCtrl.dismiss();
            }
            // console.log(data);
        });
        // console.log(newUser);
    };
    NewUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-user',template:/*ion-inline-start:"C:\Users\zhuzh\Desktop\gsafety\fault-report-ionic\fault-report\src\app\modal\new-user\new-user.html"*/'<ion-content>\n  <header>\n    <h1 padding>New User</h1>\n  </header>\n  <hr>\n  <form text-center [formGroup]="newUserForm" (ngSubmit)="addUser()">\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating>First name:</ion-label>\n          <ion-input formControlName="firstName"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating>Last name:</ion-label>\n          <ion-input formControlName="lastName"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating>Username:</ion-label>\n          <ion-input formControlName="userName"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label floating>email:</ion-label>\n          <ion-input formControlName="email"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row> -->\n    <!-- <ion-col text-center col-12> -->\n    <button type="submit" class="submitBtn" [disabled]="!newUserForm.valid" ion-button>Submit</button>\n    <!-- </ion-col> -->\n    <!-- </ion-row> -->\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\zhuzh\Desktop\gsafety\fault-report-ionic\fault-report\src\app\modal\new-user\new-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* CommonProvider */]])
    ], NewUserPage);
    return NewUserPage;
}());

//# sourceMappingURL=new-user.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_common__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ReportDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportDetailPage = /** @class */ (function () {
    function ReportDetailPage(navCtrl, navParams, svc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.svc = svc;
        this.reportDetail = this.navParams.get('data');
        this.getImgUrl();
        // console.log(data)
    }
    ReportDetailPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ReportDetailPage');
    };
    ReportDetailPage.prototype.getImgUrl = function () {
        var _this = this;
        if (this.reportDetail.img_name) {
            this.svc.showLoading('Please wait...');
            var imgFile = Object(__WEBPACK_IMPORTED_MODULE_2_firebase__["storage"])().ref(this.reportDetail.img_name);
            imgFile.getDownloadURL().then(function (url) {
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = function (event) {
                    var blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();
                _this.svc.hiderLoading();
                _this.imgUrl = url;
                // console.log(url)
            });
        }
    };
    ReportDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report-detail',template:/*ion-inline-start:"C:\Users\zhuzh\Desktop\gsafety\fault-report-ionic\fault-report\src\app\modal\report-detail\report-detail.html"*/'<ion-content padding>\n  <header>\n    <h2>{{reportDetail.title}}</h2>\n  </header>\n  <!-- <ion-row>\n    <ion-col>\n      Location: {{reportDetail.location}}\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      Date & Time: {{reportDetail.report_time}}\n    </ion-col>\n  </ion-row>\n  <ion-row>\n  </ion-row>\n  <ion-row>\n\n  </ion-row> -->\n  <ion-row margin-top>\n    <ion-col col-3>Location: </ion-col>\n    <ion-col>{{reportDetail.location}}</ion-col>\n  </ion-row>\n  <ion-row margin-top>\n    <ion-col col-3>Timestamp:</ion-col>\n    <ion-col>{{reportDetail.report_time}}</ion-col>\n  </ion-row>\n  <ion-row margin-top>\n    <ion-col col-3>Description:</ion-col>\n    <ion-col>{{reportDetail.description}}</ion-col>\n  </ion-row>\n  <ion-row margin-top *ngIf="imgUrl">\n    <ion-col col-3>Photo</ion-col>\n    <ion-col><img [src]="imgUrl" width="70%"></ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"C:\Users\zhuzh\Desktop\gsafety\fault-report-ionic\fault-report\src\app\modal\report-detail\report-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_common__["a" /* CommonProvider */]])
    ], ReportDetailPage);
    return ReportDetailPage;
}());

//# sourceMappingURL=report-detail.js.map

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 209;

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/module-login/module-login.module": [
		812,
		0
	],
	"modal/new-report/new-report.module": [
		809,
		3
	],
	"modal/new-user/new-user.module": [
		810,
		2
	],
	"modal/report-detail/report-detail.module": [
		811,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 253;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__module_login_module_login__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, svc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.svc = svc;
        this.isAdmin = false;
        this.loginUser = null;
        this.module = 'reportMgn';
        this.loginUser = this.navParams.get('user');
        this.displayName = this.loginUser.first_name + ' ' + this.loginUser.last_name;
        if (this.loginUser.role == 'admin') {
            this.isAdmin = true;
        }
        // console.log(this.loginUser)
    }
    HomePage.prototype.toUserMgn = function () {
        this.module = 'userMgn';
    };
    HomePage.prototype.toReportMgn = function () {
        this.module = 'reportMgn';
    };
    HomePage.prototype.logout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__module_login_module_login__["a" /* ModuleLoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\zhuzh\Desktop\gsafety\fault-report-ionic\fault-report\src\pages\home\home.html"*/'<ion-content>\n  <header>\n    <!-- <h1 class="title" padding>\n      Fault Report\n    </h1> -->\n    <ion-item text-right>\n      <ion-label>\n        {{displayName}}\n      </ion-label>\n      <button ion-button item-end clear (click)="logout()">Logout</button>\n    </ion-item>\n  </header>\n  <nav>\n    <ion-row>\n      <ion-col col-lg-3 col-md-3 col-6>\n        <span class="nav" (click)="toReportMgn()">\n          Report Management</span>\n      </ion-col>\n      <ion-col col-lg-2 col-md-3 col-6>\n        <span class="nav" *ngIf="isAdmin" (click)="toUserMgn()">\n          User Management</span>\n      </ion-col>\n\n    </ion-row>\n  </nav>\n  <div class="clear"></div>\n  <div id="display-area">\n    <user-mgn *ngIf="module==\'userMgn\'" [loginuser]="loginUser"></user-mgn>\n    <report-mgn *ngIf="module==\'reportMgn\'" [loginuser]="loginUser"></report-mgn>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\zhuzh\Desktop\gsafety\fault-report-ionic\fault-report\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_common__["a" /* CommonProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(421);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_module_login_module_login__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_mgn_user_mgn__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_report_mgn_report_mgn__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modal_new_report_new_report__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modal_new_user_new_user__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modal_report_detail_report_detail__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_storage__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_firebase__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var firebaseConfig = {
    apiKey: "AIzaSyB6-P-CPqzGN-ADjtPFW563kO6qFKVoj_s",
    authDomain: "fault-report-de307.firebaseapp.com",
    databaseURL: "https://fault-report-de307.firebaseio.com",
    projectId: "fault-report-de307",
    storageBucket: "fault-report-de307.appspot.com",
    messagingSenderId: "155078496831"
};
__WEBPACK_IMPORTED_MODULE_18_firebase__["initializeApp"](firebaseConfig);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_module_login_module_login__["a" /* ModuleLoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__components_user_mgn_user_mgn__["a" /* UserMgnComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_report_mgn_report_mgn__["a" /* ReportMgnComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modal_new_report_new_report__["a" /* NewReportPage */],
                __WEBPACK_IMPORTED_MODULE_14__modal_new_user_new_user__["a" /* NewUserPage */],
                __WEBPACK_IMPORTED_MODULE_15__modal_report_detail_report_detail__["a" /* ReportDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: 'modal/new-report/new-report.module#NewReportPageModule', name: 'NewReportPage', segment: 'new-report', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'modal/new-user/new-user.module#NewUserPageModule', name: 'NewUserPage', segment: 'new-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: 'modal/report-detail/report-detail.module#ReportDetailPageModule', name: 'ReportDetailPage', segment: 'report-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/module-login/module-login.module#ModuleLoginPageModule', name: 'ModuleLoginPage', segment: 'module-login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                // AngularFireModule.initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_storage__["AngularFireStorageModule"],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["AngularFireDatabaseModule"]
                // AngularFireModule
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_module_login_module_login__["a" /* ModuleLoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__modal_new_report_new_report__["a" /* NewReportPage */],
                __WEBPACK_IMPORTED_MODULE_14__modal_new_user_new_user__["a" /* NewUserPage */],
                __WEBPACK_IMPORTED_MODULE_15__modal_report_detail_report_detail__["a" /* ReportDetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_common__["a" /* CommonProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonProvider = /** @class */ (function () {
    function CommonProvider(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    CommonProvider.prototype.showLoading = function (words) {
        this.loader = this.loadingCtrl.create({
            content: words,
        });
        this.loader.present();
    };
    CommonProvider.prototype.hiderLoading = function () {
        if (this.loader) {
            this.loader.dismiss();
            this.loader = null;
        }
    };
    CommonProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], CommonProvider);
    return CommonProvider;
}());

//# sourceMappingURL=common.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_module_login_module_login__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { AngularFireModule } from 'angularfire2';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_module_login_module_login__["a" /* ModuleLoginPage */];
        platform.ready().then(function () {
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
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\zhuzh\Desktop\gsafety\fault-report-ionic\fault-report\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\zhuzh\Desktop\gsafety\fault-report-ionic\fault-report\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMgnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_modal_new_user_new_user__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_common__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the UserMgnComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var UserMgnComponent = /** @class */ (function () {
    function UserMgnComponent(api, modalCtrl, alertCtrl, svc) {
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.svc = svc;
        this.loadUsers();
    }
    UserMgnComponent.prototype.loadUsers = function () {
        var _this = this;
        this.svc.showLoading('Please wait...');
        this.api.getAllUsers().subscribe(function (data) {
            _this.svc.hiderLoading();
            _this.users = data;
        }, function (err) {
            _this.svc.hiderLoading();
            console.log(err);
        });
    };
    UserMgnComponent.prototype.newUser = function () {
        var _this = this;
        console.log('Hello');
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__app_modal_new_user_new_user__["a" /* NewUserPage */]);
        modal.present();
        modal.onDidDismiss(function () {
            _this.loadUsers();
        });
    };
    UserMgnComponent.prototype.removeUser = function (user) {
        var _this = this;
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
                    handler: function () {
                        _this.svc.showLoading('Please wait...');
                        _this.api.removeUser(user).subscribe(function () {
                            _this.svc.hiderLoading();
                            _this.loadUsers();
                        }, function (err) {
                            _this.svc.hiderLoading();
                            console.log(err);
                        });
                    }
                }
            ]
        }).present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], UserMgnComponent.prototype, "loginuser", void 0);
    UserMgnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'user-mgn',template:/*ion-inline-start:"C:\Users\zhuzh\Desktop\gsafety\fault-report-ionic\fault-report\src\components\user-mgn\user-mgn.html"*/'<header>\n\n  <ion-row><span style="font-size: 1.5em">User List </span><button ion-button (click)="newUser()" clear>+ New\n      user</button></ion-row>\n</header>\n<ion-list>\n  <ion-item *ngFor="let u of users">\n    <ion-label>\n      {{u.username}}\n    </ion-label>\n    <button item-end ion-button (click)="removeUser(u)">Remove</button>\n  </ion-item>\n</ion-list>'/*ion-inline-end:"C:\Users\zhuzh\Desktop\gsafety\fault-report-ionic\fault-report\src\components\user-mgn\user-mgn.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_common__["a" /* CommonProvider */]])
    ], UserMgnComponent);
    return UserMgnComponent;
}());

//# sourceMappingURL=user-mgn.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportMgnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_modal_new_report_new_report__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_modal_report_detail_report_detail__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ReportMgnComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ReportMgnComponent = /** @class */ (function () {
    function ReportMgnComponent(api, modalCtrl, svc) {
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.svc = svc;
    }
    ReportMgnComponent.prototype.createReport = function () {
        var _this = this;
        // console.log('Hello')
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__app_modal_new_report_new_report__["a" /* NewReportPage */], { data: this.loginuser });
        modal.present();
        modal.onDidDismiss(function () {
            _this.svc.showLoading('Please wait...');
            _this.api.getReportsById(_this.loginuser.id).subscribe(function (data) {
                _this.svc.hiderLoading();
                _this.reports = data;
            }, function (err) {
                _this.svc.hiderLoading();
                console.log(err);
            });
        });
    };
    ReportMgnComponent.prototype.ngOnInit = function () {
        // console.log(this.loginuser);
        this.loadReports();
    };
    ReportMgnComponent.prototype.loadReports = function () {
        var _this = this;
        this.svc.showLoading('Please wait...');
        if (this.loginuser.role != 'user') {
            this.api.getAllReports().subscribe(function (data) {
                _this.svc.hiderLoading();
                _this.reports = data;
            }, function (err) {
                _this.svc.hiderLoading();
                console.log(err);
            });
        }
        else {
            this.api.getReportsById(this.loginuser.id).subscribe(function (data) {
                _this.svc.hiderLoading();
                _this.reports = data;
            }, function (err) {
                _this.svc.hiderLoading();
                console.log(err);
            });
        }
    };
    ReportMgnComponent.prototype.toReportDetail = function (re) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__app_modal_report_detail_report_detail__["a" /* ReportDetailPage */], { data: re });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ReportMgnComponent.prototype, "loginuser", void 0);
    ReportMgnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'report-mgn',template:/*ion-inline-start:"C:\Users\zhuzh\Desktop\gsafety\fault-report-ionic\fault-report\src\components\report-mgn\report-mgn.html"*/'<header>\n  <ion-row><span style="font-size: 1.5em">Report List</span><button ion-button clear (click)="loadReports()"><ion-icon name="refresh"></ion-icon></button><button style="margin-left: 10%" *ngIf="loginuser.role==\'user\'"\n      ion-button (click)="createReport()">Report fault</button></ion-row>\n</header>\n<ion-list>\n  <ion-card *ngFor="let re of reports" (click)="toReportDetail(re)" padding style="width: 90%; margin:2% auto">\n    <ion-card-title style="font-size: 1.2em;">\n      {{re.title}}\n    </ion-card-title>\n    <ion-card-content>\n      <ion-row>\n        <ion-col>\n          <ion-icon name="time"></ion-icon>\n          {{re.report_time}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-icon name="ios-navigate-outline"></ion-icon>\n          {{re.location}}\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <!-- <ion-item class="report-item">\n\n  </ion-item> -->\n</ion-list>'/*ion-inline-end:"C:\Users\zhuzh\Desktop\gsafety\fault-report-ionic\fault-report\src\components\report-mgn\report-mgn.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_5__providers_common__["a" /* CommonProvider */]])
    ], ReportMgnComponent);
    return ReportMgnComponent;
}());

//# sourceMappingURL=report-mgn.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        this.baseUrl = 'https://fault-report.gear.host/api/';
    }
    ApiProvider.prototype.getAllReports = function () {
        return this.http.get(this.baseUrl + 'report/all');
    };
    ApiProvider.prototype.getReportsById = function (id) {
        return this.http.get(this.baseUrl + 'report/' + id);
    };
    ApiProvider.prototype.addReport = function (report) {
        return this.http.post(this.baseUrl + 'report/new', report);
    };
    ApiProvider.prototype.getAllUsers = function () {
        return this.http.get(this.baseUrl + 'user/all');
    };
    ApiProvider.prototype.getUser = function (username, pwd) {
        return this.http.post(this.baseUrl + 'user/auth', { username: username, password: pwd });
    };
    ApiProvider.prototype.removeUser = function (user) {
        return this.http.put(this.baseUrl + 'user/remove', user);
    };
    ApiProvider.prototype.addUser = function (user) {
        return this.http.post(this.baseUrl + 'user/add', user);
    };
    ApiProvider.prototype.changePwd = function (user) {
        return this.http.put(this.baseUrl + 'user/new', user);
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ })

},[416]);
//# sourceMappingURL=main.js.map