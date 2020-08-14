import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoService } from 'src/app/user-info.service';
import {InteractionService} from 'src/app/interaction.service'
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private userInfoService : UserInfoService,  
    private fb : FormBuilder,
    private _interaction: InteractionService) { }


  users = this.userInfoService.getUserData();
  profileId = parseInt(this.route.snapshot.paramMap.get('id'));
  profileName = this.users[this.profileId-1].username;
  profileEmail = this.users[this.profileId-1].email;
  profilepwd = this.users[this.profileId-1].password;

  

  editUserForm = this.fb.group({
    username: [this.profileName, Validators.required],
    email:[this.profileEmail ,[Validators.required, Validators.email]],
    password:[this.profilepwd , Validators.required],
    id:[this.profileId]
  });


  // pushValue(){
  //   this.editUserForm.setValue({
  //     username: this.profileName,
  //     email: this.profileEmail,
  //     pwd: this.profilepwd,
  //     id : this.profileId
  //   })
  // }

  onSubmit(){
    console.log(this.editUserForm.value)
    this._interaction.sendData(this.editUserForm.value);
    this.location.back();
  }



  

  ngOnInit(): void {
  }


}
