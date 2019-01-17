import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Email } from 'src/app/models/email';

@Injectable({ providedIn: 'root' })
export class ClientService {
    constructor(private http: HttpClient) { }

    allForms(emailAddress){
        return this.http.post('http://localhost:3000/allForms', emailAddress);
    }
}