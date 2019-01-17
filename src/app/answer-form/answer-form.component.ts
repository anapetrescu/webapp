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
  formQuestion
  constructor(private globals: Globals,private router: Router, private answerService: AnswerService) { }

  ngOnInit() {
    this.formQuestion = this.globals.allQuestions;
    this.questions = [this.formQuestion.Q1, this.formQuestion.Q2, this.formQuestion.Q3, this.formQuestion.Q4, this.formQuestion.Q5 ]
  }
  sendAnswer(){
    var answers = document.getElementsByTagName("input");
    var sendAns = [];
    var j = 0;

    for(let i = 0; i < answers.length; i++)
    {
      if(answers[i].checked){
        sendAns[j] = i%5 + 1;
        j++;
      }
    }
    var ans = {
      a1: sendAns[0],
      a2: sendAns[1],
      a3: sendAns[2],
      a4: sendAns[3],
      a5: sendAns[4],
      formId: this.globals.allQuestions._id
    }
    console.log(ans);
    this.answerService.insertAnswer(ans).subscribe((res:any)=>{
      
    }, (err) =>{
     
    });
  }
}
