import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
// import  {LoginService} from 'src/app/login/login.service';
import {InteractionService} from "src/app/interaction.service";



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private _interactionService : InteractionService,
    // private _loginService : LoginService,
    ) { }

  istoggle = false;
  

  // profileId = parseInt(this.route.snapshot.paramMap.get('id'));
    profileId : number
  

  toggleFunc(){
    this.istoggle = !this.istoggle
  }


  ngOnInit(){

    // this._interactionService.loginId.subscribe(data =>{
    //   console.log("Admin got Id through userprofile", data);
    //   this.profileId = data;
    // })

    this.profileId = this._interactionService.loginAuth;









    // console.log("admin component is here")
    // this.loginService.loginDataSource.subscribe(dat =>{
    //   console.log("data receved in admin after login is", dat);
    //   this.paraid = dat;
    // })
    // console.log(this._interactionService.loginData.subscribe())

    /*console.log("Inside ngOnInit");
    this._interactionService.loginDataSource.subscribe(data => {
      console.log("Admin hain ye",data);
    })*/

    // this._loginService.loginData.subscribe(data => {
      
    //     console.log("inside Subscriber of LoginService");
    //     console.log(data);
    // });
    
    
  }

}
