import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Email } from 'src/app/models/email';

@Injectable({ providedIn: 'root' })
export class FormService {
    constructor(private http: HttpClient) { }

    insertEmail(Contact){
        return this.http.post('http://localhost:3000/contact', Contact);
    }

    insertMap(UserContact){
        return this.http.post('http://localhost:3000/contactMap', UserContact);
    }

    insertQuestion(Questions){
        return this.http.post('http://localhost:3000/questions', Questions);
    }
}