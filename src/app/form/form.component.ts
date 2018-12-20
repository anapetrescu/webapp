import { Component, OnInit } from '@angular/core';
import {Globals} from 'src/app/services/globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  inputs = [1];
  numberOfInputs = 1;

  constructor(private globals: Globals,private router: Router) { }
  
  ngOnInit() {
  }

  public addInput() {
    this.numberOfInputs++; 
    if( this.numberOfInputs > 5){
      alert("Maximum numbers of questions!");
      return;
    }
    this.inputs.push(this.numberOfInputs);
  }

  public deleteInput() {
    this.numberOfInputs--;
    if( this.numberOfInputs <= 1){
      this.numberOfInputs++;
      alert("Minimum numbers of questions!");
      return;
    }
    this.inputs.pop();
  }

  public seeQuestions(){
    var questions = document.getElementsByTagName('input');
    for(let i = 0 ; i < questions.length; i++){
      this.globals.questions[i] = questions[i].value.toString();
    }
    console.log(this.globals.questions);
    this.router.navigate(['viewForm']);
  }
}
