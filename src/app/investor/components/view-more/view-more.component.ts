import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../../shared/services/investor-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';
//import { Router } from '@angular/router';


@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent implements OnInit {
 
  len: any 
  constructor(
    private investorService: InvestorService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private toastr: ToastrManager,
    private router: Router

  ) { }

  idea_id:any;
  send_request:any;
  comments:any;
  commentsreverse:any;
  commentslist:any;
  req_button;
  rId;

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

  profile = {
    email: "",
    name: "",
    country: "",
    imageURL: "",
    fname: "",
    lname: ""
  }

  ngOnInit() {
    this.send_request = true;
    this.route.queryParams.subscribe(params => {
      this.idea_id = params['idea_id']; 
      this.send_request = params['send_request'];
    })

    console.log(this.idea_id);

    this.investorService.viewIdeaById(this.idea_id)
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

      this.rId = this.idea.user;

    this.investorService.getInvestorProfile(this.idea.user)
      .subscribe(res => {
        let user = res.json();
        this.profile.email = user.email;
        this.profile.name = user.firstName + " " + user.lastName;
        this.profile.country = user.country;
        this.profile.imageURL = user.imageURL;
        this.profile.fname =  user.firstName;
        this.profile.lname =user.lastName;

        console.log(this.profile.imageURL);
      })
})
    
    var iId =this.idea_id ;
    console.log(iId)
    this.investorService.viewComment(iId)
    .subscribe(res=>{
      this.comments = res.json();
      this.commentslist=this.comments.comment;
      this.commentsreverse=this.commentslist.reverse();
      //localStorage.setItem('idea', res.token);
      console.log(this.comments.comment);//buff plus buffii
    })
    
    

  


  }

  sendRequest(tId,iId,ideaname){
    var fId = this.auth.currentUser._id;
    let fname = this.auth.currentUser.firstName;
    let lname = this.auth.currentUser.lastName;

    let request = {
      'username' : fname+" "+lname,
      'ideaname' : ideaname
    }

    this.investorService.sendRequest(fId,tId,iId,request)
    .subscribe(res=>{
      let response=res.json();
      console.log(response);
      if(response.success){
        this.toastr.successToastr('Request Sent!');}
    })
  }

  goToChat(){
    console.log(this.rId);
    this.router.navigate(['/chat'],{ queryParams: { receive_id: this.rId } });
  }

  requestStatus(iId){
    console.log(iId);
    var uId = this.auth.currentUser._id;
    this.req_button = false;
    console.log(this.req_button);

    this.investorService.requestStatus(uId,iId)
    .subscribe(res=>{
      let response = res.json();
      console.log(response);
      
      var keys = Object.keys(response);
      this.len = keys.length;
      console.log(this.len)

      if(this.len == 0){
          this.req_button=true;
          console.log(this.req_button);
      }
    })

  }

}
