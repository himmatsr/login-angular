import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginDataSource = new EventEmitter();
  constructor() { }
  sendData(data: number){
    this.loginDataSource.emit(data);
  }


}
