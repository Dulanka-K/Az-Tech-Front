import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-boosted-ideas',
  templateUrl: './boosted-ideas.component.html',
  styleUrls: ['./boosted-ideas.component.css']
})
export class BoostedIdeasComponent implements OnInit {

  constructor(
    private adminService:AdminService
  ) { }

  ideas: any;
  ideasreverse:any;

  ngOnInit() {
    const status = true;
    this.adminService.boostedIdeas(status)
    .subscribe(res=>{
      this.ideas=res.json();
      this.ideasreverse=this.ideas.reverse();
    });
  }

}
