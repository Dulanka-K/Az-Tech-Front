import { AuthService } from 'src/app/shared/services/auth.service';
import { InvestorService } from './../../shared/services/investor-service.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class InvestorProfileComponent implements OnInit {

  selectedFile: File = null;
  url = "";
  imageView = false;

  investor = {
    email: "",
    name: "",
    country: "",
    organisation: "",
    imageURL: "",
    fname: "",
    lname: "",
    about: "",
    field: ""
  }

  reviews = []


  constructor(
    private investorService: InvestorService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    var uId = this.authService.currentUser._id;
    
    console.log(uId);
    this.investorService.getInvestorProfile(uId)
      .subscribe(res => {
        let user = res.json();
        this.investor.email = user.email;
        this.investor.name = user.firstName + " " + user.lastName;
        this.investor.country = user.country;
        this.investor.organisation = user.organisation;
        this.investor.imageURL = user.imageURL;
        this.investor.fname = user.firstName;
        this.investor.lname = user.lastName;
        this.investor.about = user.about;
        this.investor.field = user.field;

        this.reviews = res.json().reviews;
        
        console.log(res.json());
      })
  }



  updateImage() {

    let uId = this.authService.currentUser._id;

    this.investorService.uploadImage(this.selectedFile,uId)
      .subscribe(res=>{
        let response = res.json();
        console.log(response);
        this.investor.imageURL = response.imageURL;
      });


  }

  onFileSelected(event){
    if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
          reader.readAsDataURL(event.target.files[0]);
          reader.onload = (event) => {
            this.url = event.target['result']; //result
          }
    this.imageView = true;
    this.selectedFile = <File>event.target.files[0];
  }

  }





}
