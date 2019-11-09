import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvestorService } from 'src/app/investor/shared/services/investor-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: string[] = [
    "Information Technology", "Health", "Marketing", "Boosted"
   ]
 
  ideas: any;
  ideasreverse:any;
  
  constructor(
    private investorService: InvestorService,
     private router: Router
  ) { }

  ngOnInit() {
  }

  categoryButton: string = "Boosted";

  onCategoryClicked(category){
    if(category === "Boosted"){
      this.categoryButton = "Boosted"
       const status = true;
      this.investorService.boostedIdeas(status)
      .subscribe(res=>{
      this.ideas=res.json();
      this.ideasreverse=this.ideas.reverse();
      this.investorService.ideas.emit(this.ideasreverse);
    });
    }else{
      this.categoryButton = category;
      this.investorService.categoryView(category)
      .subscribe(res=>{
         this.ideas=res.json();
         this.ideasreverse=this.ideas.reverse();
      this.investorService.ideas.emit(this.ideasreverse);
      });
    }
    
  }

}
