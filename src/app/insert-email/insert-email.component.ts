import { Component, OnInit } from '@angular/core';
import {Globals} from 'src/app/services/globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-email',
  templateUrl: './insert-email.component.html',
  styleUrls: ['./insert-email.component.scss']
})
export class InsertEmailComponent implements OnInit {

  email:any;
  constructor(private globals: Globals,private router: Router) { }

  ngOnInit() {
  }

  public search() {
    var e = document.getElementsByTagName('input');
    this.globals.email = e[0].value.toString();
    console.log(this.globals.email);
    this.router.navigate(['allForms']);
  }

}
