import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
  }

  baseUrl: string = 'https://fault-report.gear.host/api/';



  getAllReports() {
    return this.http.get(this.baseUrl + 'report/all');
  }

  getReportsById(id) {
    return this.http.get(this.baseUrl + 'report/' + id);
  }

  addReport(report) {
    return this.http.post(this.baseUrl + 'report/new', report);
  }

  getAllUsers() {
    return this.http.get(this.baseUrl + 'user/all');
  }

  getUser(username, pwd) {
    return this.http.post(this.baseUrl + 'user/auth', { username: username, password: pwd });
  }

  removeUser(user) {
    return this.http.put(this.baseUrl + 'user/remove', user);
  }

  addUser(user) {
    return this.http.post(this.baseUrl + 'user/add', user);
  }

  changePwd(user) {
    return this.http.put(this.baseUrl + 'user/new', user);
  }

}
