import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalAuthGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrManager
  ) { }

  canActivate(){
    let role = this.authService.currentUser.user.role;
    if(this.authService.isLogged() && role == 'professional') return true;

    this.toastr.warningToastr("You are not a professional..!");

    this.router.navigate(['loginprofessional']);
    return false;

  }
}
