import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { CreateLunchGroupComponent } from './create-lunch-group/create-lunch-group.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserPortalComponent,
    CreateLunchGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
