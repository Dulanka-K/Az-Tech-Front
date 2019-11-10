import { Component, OnInit } from '@angular/core';
import { professionalService } from 'src/app/professional/shared/services/professional.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requests:any;
  requestsreverse:any;
  investorname:any;
  rId:any;

  constructor(
    private professionalService: professionalService,
    private auth: AuthService,
    private router: Router

  ) { }

  profile = {
    email: "",
    name: "",
    country: "",
    imageURL: "",
    fname: "",
    lname: "",
    organisation: "",
    field: "",
    about: ""
  }

  ngOnInit() {
    let uId = this.auth.currentUser._id;

    this.professionalService.viewRequest(uId)
    .subscribe(res=>{
      this.requests=res.json();
      this.requestsreverse=this.requests.reverse();
      console.log(this.requests);
    })
  }

  reqstatus(status:string,rId){
    
    let uId = this.auth.currentUser._id;
    const statu = {
           status: status
        }
    this.professionalService.setStatus(uId,rId,statu)
       .subscribe(res=>{
         console.log(res.json());
    })
    window.location.reload();
  }

  editIdea(ideaID){
    this.router.navigate(['professional/editidea'], { queryParams: { idea_id: ideaID } });
    
  }

  investorProfile(uId,investor){
    this.investorname = investor;
    this.rId = uId;
    console.log(this.rId+"rId");
    
    this.professionalService.getProfessionalProfile(this.rId)
      .subscribe(res => {
        let user = res.json();
        console.log(user);
        this.profile.email = user.email;
        this.profile.name = user.firstName + " " + user.lastName;
        this.profile.country = user.country;
        this.profile.imageURL = user.imageURL;
        this.profile.fname =  user.firstName;
        this.profile.lname =user.lastName;
        this.profile.organisation = user.organisation;
        this.profile.field = user.field;
        this.profile.about = user.about;

      })
  }

  goToChat(){
    console.log(this.rId);
    this.router.navigate(['/chat'],{ queryParams: { receive_id: this.rId } });
  }

}
