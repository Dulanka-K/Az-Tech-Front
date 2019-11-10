import { Component, OnInit, Input } from '@angular/core';
import { professionalService } from '../../../shared/services/professional.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-idea',
  templateUrl: './edit-idea.component.html',
  styleUrls: ['./edit-idea.component.css']
})
export class EditIdeaComponent implements OnInit {

  @Input() content;
  
  constructor(
    private professionalService: professionalService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrManager,
    private router: Router
  ) { 
    this.form = fb.group({
      content:[this.content, Validators.required]

    });
  }

  
  idea_id:any;
  form;
  comments:any;
  commentslist:any;
  commentsreverse:any;

  idea = {
    title: "",
    content: "",
    category: "",
    type: "",
    date: "",
    upvotes: "",
    downvotes:""
  }

  ngOnInit() {
    
    this.route.queryParams.subscribe(params => {
           this.idea_id = params['idea_id'];
         })
    console.log(this.idea_id);
    this.professionalService.viewIdeaById(this.idea_id)
    .subscribe(res=>{
      let i = res.json();
      this.idea.title = i.title;
      this.idea.content = i.content;
      this.idea.category = i.category;
      this.idea.type = i.type;
      this.idea.date = i.date;
      this.idea.upvotes = i.upvotes;
      this.idea.downvotes = i.downvotes;
      
      this.content = this.idea.content;

      this.form.patchValue({
        content: this.content
      })
      
    })

    

    var iId =this.idea_id ;
    console.log(iId)
    this.professionalService.viewComment(iId)
    .subscribe(res=>{
      this.comments = res.json();
      this.commentslist = this.comments.comment;
      this.commentsreverse = this.commentslist.reverse();
      //localStorage.setItem('idea', res.token);
      console.log(this.comments.comment);
    })
  }
  

  editIdea(form){
    let i = form.value;
    let idea={
      'content':i.content
    }
    console.log(idea);
    this.professionalService.editIdea(this.idea_id,idea).subscribe(res=>{
      if(res.json().success){
        this.toastr.successToastr('Idea edited successfully!');
      }
    });
    form.reset();
    window.location.reload();
  }

  deleteIdea(){
    this.professionalService.deleteIdea(this.idea_id).subscribe(res=>{
      if(res.json().success){
        this.toastr.successToastr('Idea deleted successfully!');
      }
    });
    this.router.navigate(['professional/profile']);
  }

  boostIdea(){

    let status = {};

    this.professionalService.boostIdea(this.idea_id,status)
    .subscribe(res=>{
      console.log(res.json());
    })
    window.location.reload();
  }

}
