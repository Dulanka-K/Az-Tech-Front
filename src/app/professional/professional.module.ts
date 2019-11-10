import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalRoutingModule } from './professional-routing.module';
import { ProfessionalDashbordComponent } from 'src/app/professional/components/professional-dashbord/professional-dashbord.component';
import { CategoryviewComponent } from 'src/app/professional/components/professional-dashbord/categoryview/categoryview.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { professionalService } from './shared/services/professional.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BarRatingModule } from 'ngx-bar-rating';
import { ProfessionalProfileComponent } from './components/professional-profile/professional-profile.component';
import { ToastrModule } from 'ng6-toastr-notifications';
import { NgFloatingActionButtonModule } from '@ng4746/ng-floating-action-button';
import { FloatingActionMenuModule } from 'ng2-floating-action-menu';
import { ProfessionalProfileEditComponent } from './components/professional-profile/edit/edit.component';
import { AddNewIdeaComponent } from './components/professional-profile/add-new-idea/add-new-idea.component';
import { MyIdeasComponent } from './components/professional-profile/my-ideas/my-ideas.component';
import { EditIdeaComponent } from './components/professional-profile/edit-idea/edit-idea.component';
import { ViewAllIdeasComponent } from './components/professional-dashbord/view-all-ideas/view-all-ideas.component';
import { CommentComponent } from './components/comment/comment.component';
import { RequestsComponent } from './components/requests/requests.component';
//import { ChatComponent } from '../chat/chat.component';


@NgModule({
    imports: [
      CommonModule,
      ProfessionalRoutingModule,
      MDBBootstrapModule,
      FormsModule,
      ReactiveFormsModule,
      NgFloatingActionButtonModule,
      FloatingActionMenuModule,
      NgbModule,
      BarRatingModule,
      ToastrModule,
      //ChatComponent
    ],
    declarations: [
        ProfessionalDashbordComponent,   
      CategoryviewComponent, 
      ProfessionalProfileComponent,
      ProfessionalProfileEditComponent,
      AddNewIdeaComponent,
      MyIdeasComponent,
      EditIdeaComponent,
      ViewAllIdeasComponent,
      CommentComponent,
      RequestsComponent,
      //ChatComponent
    ],
    exports: [
        ProfessionalDashbordComponent, 
      CategoryviewComponent, 
    ],
    schemas: [ NO_ERRORS_SCHEMA ],
    providers: [
      professionalService,
      AuthService
    ]
  })
  export class ProfessionalModule { }
  