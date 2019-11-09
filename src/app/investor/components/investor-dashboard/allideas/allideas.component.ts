import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvestorService } from 'src/app/investor/shared/services/investor-service.service';


@Component({
  selector: 'app-allideas',
  templateUrl: './allideas.component.html',
  styleUrls: ['./allideas.component.css']
})
export class AllideasComponent implements OnInit {
  viewIdeas: any;
  constructor(
    private investorService: InvestorService,
    private router: Router
  ) { }

  upvotes:any;
  downvotes:any;

  ngOnInit() {

    this.investorService.ideas.subscribe(
      (ideas: string) =>{
        this.viewIdeas = ideas;
      console.log(this.viewIdeas);
      }
      )
  }

  viewIdea(ideaID){
    this.router.navigate(['investor/viewmore'], { queryParams: { idea_id: ideaID } });
    
  }

}
