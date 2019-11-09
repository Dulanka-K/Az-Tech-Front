import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.authService.currentUser){
      if(this.authService.currentUser.role === "professional"){
        this.router.navigate(['professional']);
      }else{
        this.router.navigate(['investor']);
      }
    }
  }

  
  loginView: string;
  userSelected: boolean = false;

  toggleUser(user){
    this.userSelected = !this.userSelected;
    this.loginView = user;
  }


}
