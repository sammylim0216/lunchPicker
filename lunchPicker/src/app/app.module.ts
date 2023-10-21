import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { CreateLunchGroupComponent } from './create-lunch-group/create-lunch-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LunchGroupLoginComponent } from './lunch-group-login/lunch-group-login.component';
import { LunchGroupPlatformComponent } from './lunch-group-platform/lunch-group-platform.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserPortalComponent,
    CreateLunchGroupComponent,
    LunchGroupLoginComponent,
    LunchGroupPlatformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
