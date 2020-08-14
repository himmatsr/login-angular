import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserInfoService} from 'src/app/user-info.service'
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userInfoService : UserInfoService) { }

  ngOnInit(): void {
  }
  users = this.userInfoService.getUserData();
  profileId = parseInt(this.route.snapshot.paramMap.get('id'));
  profileName = this.users[this.profileId-1].username;
  profileEmail = this.users[this.profileId-1].email;


  

}
