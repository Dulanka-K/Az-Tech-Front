import { Component, OnInit } from '@angular/core';
import { FloatingActionButton } from 'ng2-floating-action-menu';
import { NgFloatingActionButtonModule } from '@ng4746/ng-floating-action-button';
import { Router } from '@angular/router';
import { professionalService } from 'src/app/professional/shared/services/professional.service';


@Component({
  selector: 'app-professional-dashbord',
  templateUrl: './professional-dashbord.component.html',
  styleUrls: ['./professional-dashbord.component.css']
})
export class ProfessionalDashbordComponent implements OnInit {

  ideas: any;
  ideasreverse:any;

  constructor(
    private router: Router,
    private professionalService: professionalService
  ) 
  
  {
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
    this.professionalService.boostedIdeas(status)
    .subscribe(res=>{
      this.ideas=res.json();
      this.ideasreverse=this.ideas.reverse();
      this.professionalService.ideas.emit(this.ideasreverse);
    });
    this.router.navigate(['professional/viewallideas']);
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
      iconClass: 'fa fa-users',
      label:"Requests",
      onClick: ()=>{
        this.router.navigate(['professional/requests']);
      }
    },
    {
      iconClass: 'fa fa-user',
      label:"Profile",
      onClick: ()=>{
        this.router.navigate(['professional/profile']);
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

  
}

