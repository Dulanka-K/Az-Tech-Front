import { Component, OnInit, Input } from '@angular/core';
import { professionalService } from './../../shared/services/professional.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() content;

  constructor(
    private professionalService: professionalService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrManager,
    private router: Router,
    private auth: AuthService
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
    downvotes:"",
    username:"",
    user:""
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
 this.idea.username = i.username;
 this.idea.user = i.user;

 

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

  addComment(form){
    var uId = this.auth.currentUser._id;
    let fname = this.auth.currentUser.firstName;
    let lname = this.auth.currentUser.lastName;
    let i = form.value;
    let comment={
      'content':i.content,
      'username':fname+" "+lname
    }
    console.log(comment);
    this.professionalService.addComment(this.idea_id,uId,comment).subscribe(res=>{
      if(res.json().success){
        this.toastr.successToastr('Comment added!');
      }
    });
    form.reset();
    window.location.reload();
  }

}
