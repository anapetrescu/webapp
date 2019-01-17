import { Component, OnInit } from '@angular/core';
import {Globals} from 'src/app/services/globals';
import { Router } from '@angular/router';
import {FormService} from 'src/app/services/form.service';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.scss']
})
export class ViewFormComponent implements OnInit {
  questions = []
  constructor(private formService: FormService, private globals: Globals, private router: Router) {} 

  ngOnInit() {
    this.questions = this.globals.questions;
    console.log(this.questions);
  }

  public send(){
      var questions = {
        formName: this.questions[5],
        q1: this.questions[0],
        q2: this.questions[1],
        q3: this.questions[2],
        q4: this.questions[3],
        q5: this.questions[4],
      };
      this.formService.insertQuestion(questions).subscribe((res:any)=>{
        }, (err) =>{
         
        });
}
}
