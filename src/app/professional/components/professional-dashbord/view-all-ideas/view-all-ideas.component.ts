import { Component, OnInit } from '@angular/core';
import { professionalService } from 'src/app/professional/shared/services/professional.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-all-ideas',
  templateUrl: './view-all-ideas.component.html',
  styleUrls: ['./view-all-ideas.component.css']
})
export class ViewAllIdeasComponent implements OnInit {
  viewIdeas: any;
  viewIdeasreverse: any;

  constructor(
    private professionalService: professionalService,
    private router: Router
  ) { }

  upvotes:any;
  downvotes:any;

  ngOnInit() {
    
    this.professionalService.ideas.subscribe(
      (ideas: string) =>{
        this.viewIdeas = ideas;
        //this.viewIdeasreverse = this.viewIdeas.reverse();
      console.log(this.viewIdeas);
      }
      )

      
  }

  editIdea(ideaID){
    this.router.navigate(['professional/comment'], { queryParams: { idea_id: ideaID } });
    
  }

  vote(id){
    console.log(this.downvotes);
    if(this.upvotes == true){
      this.upvotes = false;
      let votesup={
        'upvotes':true
      }
    this.professionalService.updateIdeaup(id,votesup)
    .subscribe(res=>{
      console.log(res.json());
    });
  }
  else if(this.downvotes == true){
    this.downvotes = false;
    let votesdown={
      'downvotes':true
    }
  this.professionalService.updateIdeadown(id,votesdown)
  .subscribe(res=>{
    console.log(res.json());
  });
  }
}

}
