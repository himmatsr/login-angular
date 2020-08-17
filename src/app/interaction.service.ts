import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  loginDataSource = new EventEmitter();
  loginId = new EventEmitter();
  loginAuth : number;
  constructor() { }

  sendData(data: any){
    this.loginDataSource.emit(data);
  }

  sendprofile(pid: number){
    this.loginId.emit(pid);
  }
}


