import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateLunchGroupComponent } from './create-lunch-group/create-lunch-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LunchGroupLoginComponent } from './lunch-group-login/lunch-group-login.component';
import { LunchGroupPlatformComponent } from './lunch-group-platform/lunch-group-platform.component';
import { DecideLunchGroupComponent } from './decide-lunch-group/decide-lunch-group.component';
import { LunchGroupPasscodeComponent } from './lunch-group-passcode/lunch-group-passcode.component';
import { LunchGroupNotfoundComponent } from './lunch-group-notfound/lunch-group-notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateLunchGroupComponent,
    LunchGroupLoginComponent,
    LunchGroupPlatformComponent,
    DecideLunchGroupComponent,
    LunchGroupPasscodeComponent,
    LunchGroupNotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
