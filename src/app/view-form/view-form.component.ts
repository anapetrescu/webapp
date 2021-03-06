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

  public response(){
    this.router.navigate(['answerForm']);
  }

  public goBack() {
    this.router.navigate(['form']);
  }
}
