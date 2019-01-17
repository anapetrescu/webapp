import { Component, OnInit } from '@angular/core';
import {ClientService} from 'src/app/services/client.service';
import {Globals} from 'src/app/services/globals';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-forms',
  templateUrl: './all-forms.component.html',
  styleUrls: ['./all-forms.component.scss']
})
export class AllFormsComponent implements OnInit {

  forms: any;
<<<<<<< HEAD
  email: any;
  form;
  constructor(private clientService: ClientService, private globals: Globals, private router: Router) { }

  ngOnInit() {
    this.email = this.globals.email;
    var client = {
      email: this.email,
    }
    console.log(this.email);
    this.clientService.allForms(client).subscribe((res:any)=>{
        console.log(res.forms);
        this.forms = res.forms;
      }, (err) =>{
      
      });
  }
  getQuestions(i){
    this.form = this.forms[i];
    this.globals.allQuestions = this.form;
    this.router.navigate(['allForms/answerForm/', this.form._id]);
=======
  email;
  constructor(private clientService: ClientService, private globals: Globals) { }

  ngOnInit() {
    this.email = this.globals.email;
    console.log(this.email);
    this.forms = this.clientService.allForms(this.email);
>>>>>>> ec052b769c1ac188db2d124ad6744ed944fed757
  }

}
