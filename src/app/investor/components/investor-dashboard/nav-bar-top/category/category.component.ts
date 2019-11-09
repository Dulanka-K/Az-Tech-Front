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
      this.investorService.ideas.emit(this.ideas);
    });
    }else{
      this.categoryButton = category;
      this.investorService.categoryView(category)
      .subscribe(res=>{
         this.ideas=res.json();
         this.investorService.ideas.emit(this.ideas);
        //console.log(this.ideas[0].content);
      });
    }
    
  }

}
