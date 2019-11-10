import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';
import { ToastrManager } from 'ng6-toastr-notifications';


@Component({
  selector: 'app-boosted-ideas',
  templateUrl: './boosted-ideas.component.html',
  styleUrls: ['./boosted-ideas.component.css']
})
export class BoostedIdeasComponent implements OnInit {

  constructor(
    private adminService:AdminService,
    private toastr: ToastrManager

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

  deleteIdea(iId){
    this.adminService.deleteIdea(iId).subscribe(res=>{
      if(res.json().success){
        this.toastr.successToastr('Idea deleted successfully!');
        window.location.reload();
      }
    });
  }

}
