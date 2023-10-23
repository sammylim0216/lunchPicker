import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLunchGroupComponent } from './create-lunch-group/create-lunch-group.component';
import { LunchGroupLoginComponent } from './lunch-group-login/lunch-group-login.component';
import { LunchGroupPlatformComponent } from './lunch-group-platform/lunch-group-platform.component';
import { DecideLunchGroupComponent } from './decide-lunch-group/decide-lunch-group.component';
import { LunchGroupPasscodeComponent } from './lunch-group-passcode/lunch-group-passcode.component';
import { LunchGroupNotfoundComponent } from './lunch-group-notfound/lunch-group-notfound.component';

const routes: Routes = [
  {path:'create-lunch-group',component: CreateLunchGroupComponent},
  {path:'lunch-group-login',component: LunchGroupLoginComponent},
  {path:'lunch-group-platform',component: LunchGroupPlatformComponent},
  {path:'decide-lunch-group',component: DecideLunchGroupComponent},
  {path:'lunch-group-notfound',component: LunchGroupNotfoundComponent},
  {path: 'lunch-group-passcode/:id', component: LunchGroupPasscodeComponent},
  {path: '',   redirectTo: '/lunch-group-login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
