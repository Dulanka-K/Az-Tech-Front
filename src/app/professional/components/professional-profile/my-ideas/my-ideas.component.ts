import { Component, OnInit } from '@angular/core';
import { professionalService } from '../../../shared/services/professional.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-ideas',
  templateUrl: './my-ideas.component.html',
  styleUrls: ['./my-ideas.component.css']
})
export class MyIdeasComponent implements OnInit {


  ideas: any;
  idealist: any;
  idealistreverse:any;

  constructor(
    private professionalService: professionalService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    var uId = this.auth.currentUser._id;
    
    console.log(uId)
    this.professionalService.viewIdea(uId)
    .subscribe(res=>{
      
      this.ideas = res.json();
      this.idealist = this.ideas.idea;
      this.idealistreverse = this.idealist.reverse();
      
      console.log(this.ideas.idea);
    })
  }

  editIdea(ideaID){
    this.router.navigate(['professional/editidea'], { queryParams: { idea_id: ideaID } });
    
  }
}
