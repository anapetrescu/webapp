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

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProfilPageComponent,
    MenuComponent,
    FormComponent
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
      }
    ])
  ],
  providers: [Globals],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
