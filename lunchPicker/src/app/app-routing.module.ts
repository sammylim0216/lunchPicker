import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { CreateLunchGroupComponent } from './create-lunch-group/create-lunch-group.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { LunchGroupLoginComponent } from './lunch-group-login/lunch-group-login.component';
import { LunchGroupPlatformComponent } from './lunch-group-platform/lunch-group-platform.component';

const routes: Routes = [
  {path:'user-portal',component: UserPortalComponent},
  {path:'create-lunch-group',component: CreateLunchGroupComponent},
  {path:'login',component: UserLoginComponent},
  {path:'lunch-group-login',component: LunchGroupLoginComponent},
  {path:'lunch-group-platform',component: LunchGroupPlatformComponent},
  {path: '',   redirectTo: '/lunch-group-login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
