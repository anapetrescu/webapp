import { Component, OnInit } from '@angular/core';
import {Globals} from 'src/app/services/globals';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  currentUser = {};
  constructor(private globals: Globals) {
    this.currentUser = globals.currentUser;
   }

  ngOnInit() {
  }

}
