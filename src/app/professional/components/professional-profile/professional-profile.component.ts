import { Component, OnInit } from '@angular/core';
import { professionalService } from '../../shared/services/professional.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-professional-profile',
  templateUrl: './professional-profile.component.html',
  styleUrls: ['./professional-profile.component.css']
})
export class ProfessionalProfileComponent implements OnInit {

  selectedFile: File = null;
  url = "";
  imageView = false;


  professional = {
    email: "",
    name: "",
    country: "",
    imageURL: "",
    fname: "",
    lname: ""
  }

  reviews = []

  constructor(
    private professionalService: professionalService,
    private auth: AuthService
  ) { }

  ngOnInit() {

    var uId = this.auth.currentUser._id;

    this.professionalService.getProfessionalProfile(uId)
      .subscribe(res => {
        let user = res.json();
        this.professional.email = user.email;
        this.professional.name = user.firstName + " " + user.lastName;
        this.professional.country = user.country;
        this.professional.imageURL = user.imageURL;
        this.professional.fname =  user.firstName;
        this.professional.lname =user.lastName;

        this.reviews = res.json().reviews;
      })
  }


  //img: File = null;

  updateImage() {
    // if (this.img === null) {
    //   console.log("null image");
    //   return
    // }

    // console.log("update image");
    // console.log(this.img);
    
    // let img = {'image': this.url, 'userId':uId}
    // console.log(img);
    //let img = {'image': this.url, 'email':this.investor.email, 'role':'investor'}
    let uId = this.auth.currentUser._id;

    this.professionalService.uploadImage(this.selectedFile,uId)
      .subscribe(res=>{
        let response = res.json();
        console.log(response);
        this.professional.imageURL = response.imageURL;
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
  // onSelectFile(event) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();
  //     reader.readAsDataURL(event.target.files[0]);
  //     reader.onload = (event) => {
  //       this.url = event.target['result']; //result
  //     }
  //     this.imageView = true;
  //     this.img = event.target.files[0];
  //   }



}
