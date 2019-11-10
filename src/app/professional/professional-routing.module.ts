import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalDashbordComponent } from 'src/app/professional/components/professional-dashbord/professional-dashbord.component';
import { ProfessionalProfileComponent } from './components/professional-profile/professional-profile.component';
import { EditIdeaComponent } from './components/professional-profile/edit-idea/edit-idea.component';
import { ViewAllIdeasComponent } from './components/professional-dashbord/view-all-ideas/view-all-ideas.component';
import { CommentComponent } from './components/comment/comment.component';
import { RequestsComponent } from './components/requests/requests.component';
//import { ChatComponent } from '../chat/chat.component';

const routes: Routes = [
    {
      path: '',
      component: ProfessionalDashbordComponent,
      children: [
        {path: "profile",component: ProfessionalProfileComponent},
        {path: "viewallideas",component:ViewAllIdeasComponent},
        {path: 'requests',component: RequestsComponent}
      ]
    },
    {
      path: 'editidea',
      component: EditIdeaComponent
    },
    {
      path: 'comment',
      component: CommentComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProfessionalRoutingModule { }
  