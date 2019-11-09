import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { professionalService } from 'src/app/professional/shared/services/professional.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categoryview',
  templateUrl: './categoryview.component.html',
  styleUrls: ['./categoryview.component.css']
})
export class CategoryviewComponent implements OnInit {

  categories: string[] = [
    "Information Technology", "Health", "Marketing", "Boosted"
   ]
 
  ideas: any;
  ideasreverse:any;

   constructor(
     private professionalService: professionalService,
     private router: Router
   ) { }
 
   ngOnInit() {
   } 
   
 
   categoryButton: string = "Boosted";
 
   onCategoryClicked(category){
     if(category === "Boosted"){
       this.categoryButton = "Boosted"
       const status = true;
      this.professionalService.boostedIdeas(status)
      .subscribe(res=>{
      this.ideas=res.json();
      this.ideasreverse=this.ideas.reverse();
      this.professionalService.ideas.emit(this.ideasreverse);
    });
     }else{
       this.categoryButton = category;
       this.professionalService.categoryView(category)
       .subscribe(res=>{
          this.ideas=res.json();
          this.ideasreverse=this.ideas.reverse();
      this.professionalService.ideas.emit(this.ideasreverse);
         //console.log(this.ideas[0].content);
       });
     }
     
   }

  //  onClicked(){
  //   this.router.navigate(['professional/viewallideas']);
  //  }

}
