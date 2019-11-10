import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  categories: string[] = [
    "Information Technology", "Health", "Marketing", "All"
   ]
 
  ideas: any;

  constructor(
    private adminService: AdminService,
    private router: Router) 
    { 
    
  }

  ngOnInit() {
  }

  categoryButton: string = "Category";
 
  onCategoryClicked(category){
    if(category === "All"){
      this.categoryButton = "Category"
    }else{
      this.categoryButton = category;
      this.adminService.categoryView(category)
      .subscribe(res=>{
         this.ideas=res.json();
         this.adminService.ideas.emit(this.ideas);
        //console.log(this.ideas[0].content);
      });
    }
    
  }

}
