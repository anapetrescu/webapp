import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { Globals } from './services/globals';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { EmailsComponent } from './emails/emails.component';
import { ViewFormComponent } from './view-form/view-form.component';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { InsertEmailComponent} from './insert-email/insert-email.component';
import {AllFormsComponent} from './all-forms/all-forms.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProfilPageComponent,
    MenuComponent,
    FormComponent,
    EmailsComponent,
    ViewFormComponent,
    AnswerFormComponent,
    InsertEmailComponent,
    AllFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'profilePage',
        component: ProfilPageComponent
      },
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: 'contact',
        component: EmailsComponent
      },
      {
        path: 'viewForm',
        component: ViewFormComponent
      },
      {
        path:'allForms/answerForm/:id',
        component: AnswerFormComponent
      },
      {
        path:'insertEmail',
        component: InsertEmailComponent
      },
      {
        path: 'allForms',
        component: AllFormsComponent
      }
    ])
  ],
  providers: [Globals],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
