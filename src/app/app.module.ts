import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChatModule } from 'ng-chat';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ng6-toastr-notifications';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import { HttpModule } from '@angular/http';
import { RegisterService } from './shared/services/register.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/shared/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterInvestorComponent } from './components/register/register-investor/register-investor.component';
import { RegisterProfessionalComponent } from './components/register/register-professional/register-professional.component';
import { LoginInvestorComponent } from './components/login/login-investor/login-investor.component';
import { LoginProfessionalComponent } from './components/login/login-professional/login-professional.component';
import { VerificationComponent } from './components/shared/verification/verification.component';
import { AuthService } from './shared/services/auth.service';
import { AuthGaurd } from './shared/services/authguard.service';
import { InvestorService } from './investor/shared/services/investor-service.service';
import { RouterModule } from '@angular/router';
import { professionalService } from './professional/shared/services/professional.service';
import { BarRatingModule } from "ngx-bar-rating";
import { InvestorModule } from './investor/investor.module';
import {ProfessionalModule} from './professional/professional.module';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './shared/services/chat.service';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/components/admin-dashboard/admin-dashboard.component';
import { AdminNavbarComponent } from './admin/components/admin-dashboard/admin-navbar/admin-navbar.component';
import { AllIdeasComponent } from './admin/components/admin-dashboard/all-ideas/all-ideas.component';
import { AllUsersComponent } from './admin/components/admin-dashboard/all-users/all-users.component';
import { BoostedIdeasComponent } from './admin/components/admin-dashboard/boosted-ideas/boosted-ideas.component';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    RegisterInvestorComponent,
    RegisterProfessionalComponent,
    LoginInvestorComponent,
    LoginProfessionalComponent,
    VerificationComponent,
    ChatComponent,
    AdminComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    AllIdeasComponent,
    AllUsersComponent,
    BoostedIdeasComponent

  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    AppRoutingModule,
    InvestorModule,
    ProfessionalModule,
    HttpModule,
    BarRatingModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot(),
    NgChatModule,
    BlockUIModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  // exports:[ChatComponent],
  providers: [
    RegisterService,
    AuthService,
    AuthGaurd,
    InvestorService,
    professionalService,
    ChatService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
