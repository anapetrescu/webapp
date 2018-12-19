import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  inputs = [1];
  numberOfInputs = 1;

  constructor() { }
  
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
    if( this.numberOfInputs < 1){
      this.numberOfInputs++;
      alert("Minimum numbers of questions!");
      return;
    }
    this.inputs.pop();
  }
}
