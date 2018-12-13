import { Component, OnInit } from '@angular/core';
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
   text = "Create a account and find out what people say about your bussines!"
   buttonText = "Sign up"
  constructor() { }

  ngOnInit() {
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
}
