import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {FormService} from 'src/app/services/form.service';
import {Globals} from 'src/app/services/globals';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Email } from 'src/app/models/email';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {
  contactError;
  currentUser;
  constructor(private userService: UserService,private formService: FormService, private globals: Globals, private router: Router) {} 

  ngOnInit() {
    this.currentUser = this.globals.currentUser;
  }
  addContact(){
    var contact = {
      firstName: (<HTMLInputElement>document.getElementById('firstName')).value.toString(),
      lastName: (<HTMLInputElement>document.getElementById('lastName')).value.toString(),
      email: (<HTMLInputElement>document.getElementById('email')).value.toString()
    }
    this.formService.insertEmail(contact).subscribe((res:any)=>{
      console.log("ajunge si aici");
      this.formService.insertMap(contactMap).subscribe((res:any)=>
    {
      console.log("acum e okay");
      this.router.navigate(['contact']);
    }, (err) =>{
      this.contactError = "Try again!";
    });
      }, (err) =>{
        this.contactError = "This conntact already exists!";
      });
    var contactMap = {
      email:  (<HTMLInputElement>document.getElementById('email')).value.toString(),
      userId: this.currentUser.user_id
    }  
    } 
  }  
