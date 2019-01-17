import { Component, OnInit } from '@angular/core';
import {Globals} from 'src/app/services/globals';
import { Router } from '@angular/router';
import {AnswerService} from 'src/app/services/answer.service';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss']
})
export class AnswerFormComponent implements OnInit {
  questions = [];
  constructor(private globals: Globals,private router: Router, private answerService: AnswerService) { }

  ngOnInit() {
    this.questions = this.globals.questions;
  }
  sendAnswer(){
    var answers = document.getElementsByTagName("input");
    var sendAns = [];
    var j = 0;
    for(let i = 0; i < answers.length; i++)
    {
      if(answers[i].checked){
        sendAns[j] = i%5 + 1;
      }
    }
    this.answerService.insertAnswer(sendAns).subscribe((res:any)=>{
    }, (err) =>{
     
    });
  }
}
