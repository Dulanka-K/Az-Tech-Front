import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterInvestorComponent } from './components/register/register-investor/register-investor.component';
import { RegisterProfessionalComponent } from './components/register/register-professional/register-professional.component';
import { LoginInvestorComponent } from './components/login/login-investor/login-investor.component';
import { LoginProfessionalComponent } from './components/login/login-professional/login-professional.component';
import { VerificationComponent } from './components/shared/verification/verification.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {ProfessionalDashbordComponent} from './professional/components/professional-dashbord/professional-dashbord.component'
import {ProfessionalProfileComponent} from './professional/components/professional-profile/professional-profile.component'
import { ChatComponent } from './chat/chat.component';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { AdminNavbarComponent } from './admin/components/admin-dashboard/admin-navbar/admin-navbar.component';
import { AllIdeasComponent } from './admin/components/admin-dashboard/all-ideas/all-ideas.component';
import { AllUsersComponent } from './admin/components/admin-dashboard/all-users/all-users.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path:'profile',
  component:ProfessionalProfileComponent
},
{
    path: 'loginProfessional',
    component: LoginProfessionalComponent
},
{
    path: 'loginInvestor',
    component: LoginInvestorComponent
},
{
    path: 'registerInvestor',
    component: RegisterInvestorComponent
},
{
    path: 'registerProfessional',
    component: RegisterProfessionalComponent
},
{
  path: 'chat',
  component: ChatComponent
},
{
  path:'admin-dashboard',
  component: AdminDashboardComponent
},

{
  path:'all-users',
  component:AllUsersComponent
},
{
    path: 'investor',
    loadChildren: () => import('./investor/investor.module').then(m => m.InvestorModule),
},
{
    path: 'professional',
    loadChildren: () => import('./professional/professional.module').then(m => m.ProfessionalModule),
},

{
  path:'dashboard',
  component: ProfessionalDashbordComponent
},

{
    path: '**',
    component: PageNotFoundComponent
}

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    ],
})
export class AppRoutingModule { }
