import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestorDashboardComponent } from './components/investor-dashboard/investor-dashboard.component';
import { InvestorProfileEditComponent } from './components/profile/edit/edit.component';
import { InvestorProfileComponent } from './components/profile/profile.component';
import { RequestsComponent } from './components/investor-dashboard/requests/requests.component';
//import { ForumComponent } from './components/investor-dashboard/forum/forum.component';
import { AchievementsComponent } from './components/investor-dashboard/achievements/achievements.component';
import { BoostComponent } from './components/investor-dashboard/boost/boost.component';
import { AllideasComponent } from '../investor/components/investor-dashboard/allideas/allideas.component';
import { ViewMoreComponent } from './components/view-more/view-more.component';



const routes: Routes = [
  {
    path: '',
    component: InvestorDashboardComponent,
    children: [
      //{path:'', redirectTo: 'profile'},
      {path: 'requests',component:RequestsComponent},
      //{path: 'achievements',component:AchievementsComponent},
      {path: 'profile',component:InvestorProfileComponent},
      {path: "viewallideas",component:AllideasComponent},
      //{path: 'learn',component:StatsComponent},
      //{path: 'forum',component:ForumComponent},
      {path: 'boost',component:BoostComponent},
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestorRoutingModule { }
