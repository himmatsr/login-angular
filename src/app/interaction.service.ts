import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  loginDataSource = new EventEmitter();
  

  constructor() { }

  sendData(data: any){
    this.loginDataSource.emit(data);
  }
}


