import { Component, OnInit } from '@angular/core';
import {Globals} from 'src/app/services/globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss']
})
export class AnswerFormComponent implements OnInit {
  questions = [];
  constructor(private globals: Globals,private router: Router) { }

  ngOnInit() {
    this.questions = this.globals.questions;
  }

}