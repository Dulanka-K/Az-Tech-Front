import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

import { InvestorRoutingModule } from './investor-routing.module';
import { InvestorDashboardComponent } from './components/investor-dashboard/investor-dashboard.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InvestorService } from './shared/services/investor-service.service';
import { InvestorProfileComponent } from './components/profile/profile.component';
import { NgChatModule } from 'ng-chat';
import { FloatingActionMenuModule } from 'ng2-floating-action-menu';
import { NgFloatingActionButtonModule } from '@ng4746/ng-floating-action-button';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import { InvestorProfileEditComponent } from './components/profile/edit/edit.component';
import { CategoryComponent } from './components/investor-dashboard/category/category.component';
import { AllideasComponent } from './components/investor-dashboard/allideas/allideas.component';
import { ViewMoreComponent } from './components/view-more/view-more.component';
import { InvestedIdeasComponent } from './components/profile/invested-ideas/invested-ideas.component';
//import { ChatComponent } from '../chat/chat.component';




@NgModule({
  imports: [
    CommonModule,
    InvestorRoutingModule,
    MDBBootstrapModule,
    NgFloatingActionButtonModule,
    FloatingActionMenuModule,
    NgChatModule,
    FormsModule,
    ReactiveFormsModule,
    JwSocialButtonsModule,
    //ChatComponent

  ],
  declarations: [
    InvestorDashboardComponent,
    InvestorProfileComponent,
    InvestorProfileEditComponent,
    CategoryComponent,
    AllideasComponent,
    ViewMoreComponent,
    InvestedIdeasComponent,
    //ChatComponent
  ],
  exports: [
    CategoryComponent,
    InvestorDashboardComponent,
    InvestorProfileComponent,
    InvestorProfileEditComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    InvestorService,
  ]
})
export class InvestorModule { }
