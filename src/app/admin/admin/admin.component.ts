import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  istoggle = false;
  
  test: number;

  profileId = parseInt(this.route.snapshot.paramMap.get('id'));

  

  toggleFunc(){
    this.istoggle = !this.istoggle
  }


  ngOnInit(){
    // console.log("admin component is here")
    // this.loginService.loginDataSource.subscribe(dat =>{
    //   console.log("data receved in admin after login is", dat);
    //   this.paraid = dat;
    // })
    // console.log(this._interactionService.loginData.subscribe())
    
  }

}
