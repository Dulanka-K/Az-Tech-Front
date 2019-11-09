import { Component, OnInit, Input } from '@angular/core';
import { professionalService } from "./../../../shared/services/professional.service";
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { MyIdeasComponent } from '../my-ideas/my-ideas.component';

@Component({
  selector: 'app-add-new-idea',
  templateUrl: './add-new-idea.component.html',
  styleUrls: ['./add-new-idea.component.css']
})
export class AddNewIdeaComponent implements OnInit {

  form;
  @Input() title;
  @Input() category;
  @Input() content;

  constructor(
    private professionalService:professionalService,
    private fb: FormBuilder,
    private auth:AuthService,
    private toastr: ToastrManager
  ) {
    this.form = fb.group({
      title:[this.title, Validators.required],
      category:[this.category, Validators.required],
      content:[this.content, Validators.required]

    });
   }

   categories: string[] = [
    "Information Technology", "Health", "Marketing"
   ]

  ngOnInit() {
  }

  addIdea(form){
    let uId = this.auth.currentUser._id;
    let fname = this.auth.currentUser.firstName;
    let lname = this.auth.currentUser.lastName;
    let i = form.value;
    console.log(uId);
    let idea ={
      'title': i.title,
      'category': i.category,
      'type':"public",
      'content': i.content,
      'username':fname+" "+lname
      
    }
    console.log(idea);
    this.professionalService.addIdea(uId,idea).subscribe(res=>{
      if(res.json().success){
        this.toastr.successToastr('Idea added successfully!');
      }
    });

    form.reset();
    window.location.reload();
  }

}
