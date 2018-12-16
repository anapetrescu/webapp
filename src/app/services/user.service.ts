import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/app/models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get('http://localhost:3000/users');
    }

    register(user) {
     
        return this.http.post('http://localhost:3000/register', user);
    }

}