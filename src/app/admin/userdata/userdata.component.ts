import { Component, OnInit } from '@angular/core';
import {UserInfoService} from 'src/app/user-info.service';
import {InteractionService} from 'src/app/interaction.service'
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
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
    private _interaction : InteractionService) {
      console.log("inside constructor", this.users);

      //  = this.userInfoService.getUserData();
     }

    //  test = 2;


    ngOnInit(): void {
    console.log("inside ngOnInit",this.users);
    console.log("formed again bro");
    this._interaction.loginDataSource.subscribe(data => {
      if(data !== undefined){
        for(let obj in this.users){
          if(this.users[obj].id === data.id){
            this.users[obj].email = data.email;
            this.users[obj].username = data.username;
            this.users[obj].password = data.password;
          }
        }
        
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
    console.log(id);
    this.router.navigate(['../edit',id], {relativeTo: this.route});
    // this.clicked = true;
    // let editValue = this.users[id-1];
    // this.addUserForm.setValue({username: editValue.username, email: editValue.email, pwd: editValue.password, id:editValue.id }); 
  }
  addUser(){
    this.clicked = true;
    let maxId= 0;
    for(let obj of this.users){
      if(obj.id > maxId){
        maxId = obj.id;
      }
    }
    // this.addUserForm.patchValue({id: });
    this.addUserForm.setValue({username: '', email: '', password: '', id: maxId+1});
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
      
      // for(let i=0; i<this.users.length ;i++){
      //   if(this.users[i].id == id){
      //     this.users.splice(i,1);
      //     break;
      //   } 
      // }
      this.users = this.userInfoService.removeUserData(id);
      console.log(this.users);

  }

  bulkDelete(){
    const check = document.getElementsByClassName('check') as unknown as HTMLInputElement;
    console.log(check);
    let arr = [];
    for (let obj in check){
      if(check[obj].checked === false){
        arr.push(this.users[obj].id);
      }
    }
    this.users = this.userInfoService.bulkRemoveUserData(arr);

    console.log(arr);
  }


}
