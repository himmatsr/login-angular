import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private http : HttpClient) { }
  userdata =[
    {id:1,username:'Himmat', email:'hsr@gmail.com',password:'1234'},
    {id:2,username:'Jai', email:'jai@gmail.com',password:'4567'},
    {id:3,username:'Shiva', email:'shiv@gmail.com',password:'0123'}
  ]


  getUserData(){
    // return this.http.get('http://localhost:3000/users')
    return this.userdata;
  }


  addUserdata(newData){
    if(newData.id > this.userdata.length){
      this.userdata.push(newData);
    }
    else{
      this.userdata[newData.id-1].email = newData.email;
      this.userdata[newData.id-1].username = newData.username;
      this.userdata[newData.id-1].password = newData.password;
    }
    return this.userdata;
  }



  removeUserData(removeId){
    for(let i in this.userdata){
      if(this.userdata[i].id == removeId){
        this.userdata.splice(parseInt(i),1);
      }
    }
    return this.userdata;
  }

  bulkRemoveUserData(arr){
    let tempuserdata = [];
    for(let i in this.userdata){
      for(let j in arr){
        if(this.userdata[i].id == arr[j]){
          tempuserdata.push(this.userdata[i]);
        }
      }
    }
    console.log("Inside Service - bulkRemoveUserData", tempuserdata);

    this.userdata = tempuserdata;
    return this.userdata;
  }



}



