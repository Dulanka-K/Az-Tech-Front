import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) {}

user:any;

  ngOnInit() {

   
  if(this.authService.currentUser.role==="professional"){
  this.user ="PROFESSIONAL USER";
  }else if(this.authService.currentUser.role==="investor"){
    this.user ="INVESTOR";
  }else{
    this.user ="ADMINISTRATION";
  }
  
  
  }



  logOut(){
    this.authService.logOut();
  }

}
