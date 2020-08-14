import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserInfoService} from '../user-info.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userInfoService : UserInfoService,  private fb : FormBuilder ) { }

  ngOnInit(): void {

  }
  
  users = this.userInfoService.getUserData();
  profileId = parseInt(this.route.snapshot.paramMap.get('id'));
  profileName = this.users[this.profileId-1].username;
  profileEmail = this.users[this.profileId-1].email;

  clicked = false;
  clickedId: number;

  addUserForm = this.fb.group({
    username: ['', Validators.required],
    email:['',[Validators.required, Validators.email]],
    pwd:['', Validators.required],
    id:[]
  });
  editUser(id: number){
    this.clicked = true;
    let editValue = this.users[id-1];
    this.addUserForm.setValue({username: editValue.username, email: editValue.email, pwd: editValue.password, id:editValue.id }); 
  }
  addUser(){
    this.clicked = true;
    // this.addUserForm.patchValue({id: });
    this.addUserForm.setValue({username: '', email: '', pwd: '', id: this.users.length+1});
  }

  onSubmit(){
    this.clicked = false;
    // console.log();
    this.users = this.userInfoService.addUserdata(this.addUserForm.value);
    this.profileName = this.users[this.profileId-1].username;
    this.profileEmail = this.users[this.profileId-1].email;
  }

  toggle(){
    this.clicked=false;
  }



}
