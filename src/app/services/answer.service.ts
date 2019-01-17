import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Email } from 'src/app/models/email';

@Injectable({ providedIn: 'root' })
export class AnswerService {
    constructor(private http: HttpClient) { }

    insertAnswer(Answer){
        return this.http.post('http://localhost:3000/answer', Answer);
    }
}