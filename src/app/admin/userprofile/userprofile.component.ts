import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserInfoService} from 'src/app/user-info.service';
import {InteractionService} from 'src/app/interaction.service'
// import { InteractionService } from 'src/app/interaction.service';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private userInfoService : UserInfoService, 
    private interactionService : InteractionService
    ) { }

  users = this.userInfoService.getUserData();
  profileId = parseInt(this.route.snapshot.paramMap.get('id'));

  profileName : string;
  // = this.users[this.profileId-1].username;
  profileEmail : string;
  // = this.users[this.profileId-1].email;

  ngOnInit(): void {
    console.log("Inside User Profile")
    console.log(this.users);
    
    // this._interactionService.sendprofile(this.profileId);
    for(let obj of this.users){
      if(obj.id === this.profileId){
        this.profileEmail = obj.email;
        this.profileName = obj.username;
      }
    }
    console.log(this.profileId);
    this.interactionService.loginAuth = this.profileId;
    
  
  }
  




  

}
