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
import { AllFormsComponent } from './all-forms/all-forms.component'
import { InsertEmailComponent } from './insert-email/insert-email.component';

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
    AllFormsComponent,
    InsertEmailComponent
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
        path:'answerForm/:id',
        component: AnswerFormComponent
      },
      {
        path:'allForms',
        component: AllFormsComponent
      },
      {
        path: 'insertEmail',
        component: InsertEmailComponent
      }
    ])
  ],
  providers: [Globals],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
