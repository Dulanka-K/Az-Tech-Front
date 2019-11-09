import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//import { FloatingActionButton } from 'ng2-floating-action-menu';
import { NgFloatingActionButtonModule } from '@ng4746/ng-floating-action-button';
import { InvestorService } from 'src/app/investor/shared/services/investor-service.service';


@Component({
  selector: 'app-investor-dashboard',
  templateUrl: './investor-dashboard.component.html',
  styleUrls: ['./investor-dashboard.component.css']
})
export class InvestorDashboardComponent implements OnInit {

  ideas: any;
  ideasreverse:any;
  constructor(
    private router: Router,
    private investorService: InvestorService,

  ) {
    this.config = {
      placment: 'br',
      effect: 'mfb-slidein',
      iconClass: 'fa fa-cog',
      activeIconClass: 'fa fa-cog',
      toggle: 'hover',
      buttons: this.buttons
    };
  }

  ngOnInit() {
    const status = true;
    this.investorService.boostedIdeas(status)
    .subscribe(res=>{
      this.ideas=res.json();
      this.ideasreverse=this.ideas.reverse();
      this.investorService.ideas.emit(this.ideasreverse);
    });
    this.router.navigate(['investor/viewallideas']);
  }

  config;
  buttons: Array<NgFloatingActionButtonModule> = [
    {
      iconClass: 'fas fa-comments',
      label:"Chat",
      onClick: ()=>{
        this.router.navigate(['chat']);
      }
    },
    {
      iconClass: 'fa fa-user',
      label:"Profile",
      onClick: ()=>{
        this.router.navigate(['investor/profile']);
      }
    },
  ];
 
  placements = [
    {
      value: 'br',
      key: 'bottom right'
    },
    {
      value: 'bl',
      key: 'bottom left'
    },
    {
      value: 'tr',
      key: 'top right'
    },
    {
      value: 'tl',
      key: 'top left'
    },
  ];
 
  effects = [
    {
      value: 'mfb-zoomin',
      key: 'Zoom In'
    },
    {
      value: 'mfb-slidein',
      key: 'Slide In + Fade'
    },
    {
      value: 'mfb-fountain',
      key: 'Fountain'
    },
    {
      value: 'mfb-slidein-spring',
      key: 'Slide In (Spring)'
    }
  ];
 
  toggles = [
    'click',
    'hover'
  ];


  // toggleTab(tab){
  //   console.log(tab);
  //   this.router.navigate(['investor/'+tab]);
  // }


}
