import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginData = new EventEmitter();


  constructor() { }


  sendLoginData(){
    console.log("Login Service");
    // console.log(val);
    var item = "himmat";
    this.loginData.emit(item);
  }


}
