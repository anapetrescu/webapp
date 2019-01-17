import { Component, OnInit } from '@angular/core';
import {ClientService} from 'src/app/services/client.service';
import {Globals} from 'src/app/services/globals';

@Component({
  selector: 'app-all-forms',
  templateUrl: './all-forms.component.html',
  styleUrls: ['./all-forms.component.scss']
})
export class AllFormsComponent implements OnInit {

  forms: any;
  email;
  constructor(private clientService: ClientService, private globals: Globals) { }

  ngOnInit() {
    this.email = this.globals.email;
    console.log(this.email);
    this.forms = this.clientService.allForms(this.email);
  }

}
