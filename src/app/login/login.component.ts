import { Component, OnInit } from '@angular/core';
import {UserInfoService} from '../user-info.service';
// import {LoginService} from './login.service'
import { FormBuilder, Validators } from '@angular/forms';
import {InteractionService} from '../interaction.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private _userInfoService : UserInfoService, 
    private fb : FormBuilder, 
    private router: Router,
    private _interactionService : InteractionService,
    // private _loginService : LoginService,
    ) { }



  ngOnInit(): void {
  }


  notUser=false;

  profileForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    pwd: ['', Validators.required]
  });

  onSubmit(){
    console.log(this.profileForm.value);
    let formData = this.profileForm.value;
    var resp = this._userInfoService.getUserData();
    let flag = false;
    for(let obj of resp){
      if(obj.email === formData.email && obj.password === formData.pwd){
        let id = obj.id;
        this._interactionService.loginAuth = id;
        // this._loginService.sendLoginData(); // sending authentic userdata from here and admin will receive it
        // this._interactionService.sendData(obj);

        this.router.navigate(['admin/userprofile',id]);
        
        // console.log('valid User');
        // console.log(obj);
        // console.log(formData);

        flag=true;
        break;
      }
    }

    if(flag === false){
      this.notUser=true;
    }
  }

}
