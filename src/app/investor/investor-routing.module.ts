import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvestorDashboardComponent } from './components/investor-dashboard/investor-dashboard.component';
import { InvestorProfileEditComponent } from './components/profile/edit/edit.component';
import { InvestorProfileComponent } from './components/profile/profile.component';
import { AllideasComponent } from '../investor/components/investor-dashboard/allideas/allideas.component';
import { ViewMoreComponent } from './components/view-more/view-more.component';
import { ChatComponent } from '../chat/chat.component';



const routes: Routes = [
  {
    path: '',
    component: InvestorDashboardComponent,
    children: [
      {path: 'profile',component:InvestorProfileComponent},
      {path: "viewallideas",component:AllideasComponent},
    ]
  },
  {
    path: 'profile',
    component: InvestorProfileComponent,
    children: [
      {path: 'edit', component: InvestorProfileEditComponent}
    ]
  },
  {
    path: 'viewmore',
    component: ViewMoreComponent
  }
  // {
  //   path: 'chat',
  //   component: ChatComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestorRoutingModule { }
