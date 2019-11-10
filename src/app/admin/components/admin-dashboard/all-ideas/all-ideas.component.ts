import { Component, OnInit } from '@angular/core';
import { AdminNavbarComponent } from 'src/app/admin/components/admin-dashboard/admin-navbar/admin-navbar.component';
import { AdminService } from 'src/app/shared/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-all-ideas',
  templateUrl: './all-ideas.component.html',
  styleUrls: ['./all-ideas.component.css']
})
export class AllIdeasComponent implements OnInit {

  viewIdeas: any;
  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrManager,
    private router: Router
  ) { }

 


  ngOnInit() {

 /*view the string array of ideas*/
    this.adminService.ideas.subscribe(
      (ideas: string) =>{
        this.viewIdeas = ideas;
      console.log(this.viewIdeas);
      }
      )

  }

  deleteIdea(iId){
    this.adminService.deleteIdea(iId).subscribe(res=>{
      if(res.json().success){
        this.toastr.successToastr('Idea deleted successfully!');
        window.location.reload();
      }
    });
  }

}
