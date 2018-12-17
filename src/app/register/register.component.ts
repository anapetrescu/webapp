import { Component, OnInit } from '@angular/core';

import {UserService} from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import {Globals} from 'src/app/services/globals'
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('floatDiv', [
      state('left', style({
        
      })),
      state('right', style({
        right: 0,
      })),
      transition('left => right', [
        animate('0.5s')
      ]),
      transition('right => left', [
        animate('0.5s')
      ])
    ])
  ]
})
export class RegisterComponent implements OnInit {

   float = true;
   users = [];
   text = "Create a account and find out what people say about your bussines!"
   buttonText = "Sign up"
  constructor(private userService: UserService, private globals: Globals) { }

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe((res:any) => {
      this.users = res;
  });
  }

  switch() {
     this.float = !this.float;
     if(this.float === true){
      this.text = "Create an account and find out what people say about your bussines!"
      this.buttonText = "Sign up"
     }
     else{
      this.text = "Welcome back!"
      this.buttonText = "Sign in"
     }
  }

  public register(){
    var user = {
      username: (<HTMLInputElement>document.getElementById('username')).value.toString(),
      password:   (<HTMLInputElement>document.getElementById('password')).value.toString(),
      first_name: (<HTMLInputElement>document.getElementById('firstName')).value.toString(),
      last_name:  (<HTMLInputElement>document.getElementById('lastName')).value.toString(),
      company_name: (<HTMLInputElement>document.getElementById('companyName')).value.toString(),
      email: (<HTMLInputElement>document.getElementById('email')).value.toString()
  }

    this.userService.register(user).subscribe(() =>{
      console.log("success");
    }
    )
  }

  public login(){
    var user = {
      username: (<HTMLInputElement>document.getElementById('usernameLogin')).value.toString(),
      password:   (<HTMLInputElement>document.getElementById('passwordLogin')).value.toString()
    }

    this.userService.login(user).subscribe((res:any)=>{
      this.globals.currentUser = res;
      console.log(res);
      console.log(this.globals.currentUser);
    });
  }
}
