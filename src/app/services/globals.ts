import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class Globals {
  currentUser: User;
  questions: any;
  isUser: any;
}