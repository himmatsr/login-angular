import { Component, OnInit } from '@angular/core';
import {UserInfoService} from 'src/app/user-info.service';
import {InteractionService} from 'src/app/interaction.service'
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

  constructor(
    private userInfoService : UserInfoService,
    private fb: FormBuilder, 
    private router: Router, 
    private route: ActivatedRoute,
    private _interaction : InteractionService) { }



    ngOnInit(): void {
    console.log("formed again bro");
    this._interaction.loginDataSource.subscribe(data => {
      if(data !== undefined){
        this.users[data.id-1].email = data.email;
        this.users[data.id-1].username = data.username;
        this.users[data.id-1].password = data.password;
      }
    })

  }

  users = this.userInfoService.getUserData();
  // profileId = parseInt(this.route.snapshot.paramMap.get('id'));
  // profileName = this.users[this.profileId-1].username;
  // profileEmail = this.users[this.profileId-1].email;

  clicked = false;
  clickedId: number;

  addUserForm = this.fb.group({
    username: ['',Validators.required],
    email:['', [Validators.required, Validators.email]],
    password:['',Validators.required],
    id:[]
  });
  editUser(id: number){

    this.router.navigate(['../edit',id], {relativeTo: this.route});
    // this.clicked = true;
    // let editValue = this.users[id-1];
    // this.addUserForm.setValue({username: editValue.username, email: editValue.email, pwd: editValue.password, id:editValue.id }); 
  }
  addUser(){
    this.clicked = true;
    // this.addUserForm.patchValue({id: });
    this.addUserForm.setValue({username: '', email: '', password: '', id: this.users.length+1});
    console.log(this.addUserForm.value);
  }

  onSubmit(){
    this.clicked = false;
    console.log(this.addUserForm.value);
    this.users = this.userInfoService.addUserdata(this.addUserForm.value);
    console.log(this.users);
    // this.profileName = this.users[this.profileId-1].username;
    // this.profileEmail = this.users[this.profileId-1].email;
  }

  toggle(){
    this.clicked=false;
  }


  deleteUser(id){
    console.log(id);
      console.log(this.users);
      
      for(let i=0; i<this.users.length ;i++){
        if(this.users[i].id == id){
          this.users.splice(i,1);
          break;
        } 
      }
      console.log(this.users);

  }

  bulkDelete(){
    this.users.splice(0,this.users.length);
  }


}
