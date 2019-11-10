import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  allUsers:any;
role:any;
Pusers:any;
Iusers:any;
  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrManager,
    private router: Router,
    private AuthService: AuthService,
  ) { }

  ngOnInit() {

    this.adminService.viewAllUsers("professional")
      .subscribe(res=>{
         this.Pusers=res.json();
            console.log(this.Pusers);
      });
      this.adminService.viewAllUsers("investor")
      .subscribe(res=>{
         this.Iusers=res.json();
            console.log(this.Iusers);
      });
    
  

  } 
  removeUser(uId){
   console.log(uId);
    this.adminService.removeUser(uId).subscribe(res=>{
      console.log(res.json());
      if(res.json().success){
        console.log("remove front")
        this.toastr.successToastr('User removed successfully!');
      }
    });
    window.location.reload();
  }
  warn(email){
    console.log(email)
    this.adminService.warn(email).subscribe(res=>{
      console.log(res.json());
      if(res.json().success){
        this.toastr.successToastr('User warned successfully!');
      }
    });
  }

}
