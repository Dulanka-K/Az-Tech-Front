import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../../shared/services/investor-service.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invested-ideas',
  templateUrl: './invested-ideas.component.html',
  styleUrls: ['./invested-ideas.component.css']
})
export class InvestedIdeasComponent implements OnInit {

  ideas: any;

  constructor(
    private investorService: InvestorService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    var uId = this.auth.currentUser._id;
    
    console.log(uId)
    this.investorService.getInvestedIdeas(uId)
    .subscribe(res=>{
      // let i=res.json();
      // this.idea.title = i.title;
      // this.idea.content = i.content;
      this.ideas = res.json();
      //localStorage.setItem('idea', res.token);
      console.log(this.ideas);
    })
  }

  viewIdea(ideaID){
    this.router.navigate(['investor/viewmore'], { queryParams: { idea_id: ideaID, send_request:false } });
    
  }

}
