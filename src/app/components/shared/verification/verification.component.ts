import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { RegisterService } from 'src/app/shared/services/register.service';


@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  form;

  constructor(
    private activatedRoute: ActivatedRoute,
    private auth: AuthService,
    private toastr: ToastrManager,
    private router: Router,
    private RegisterService: RegisterService
 
  ) {}
  pin;
  email:any;
  ngOnInit() {
    console.log("verify called");
    // let email = this.activatedRoute.snapshot.paramMap.get('email');
    // let role = this.activatedRoute.snapshot.paramMap.get('role');

    this.RegisterService.email.subscribe(
      (email: string) =>{
        this.email = email;
      console.log(this.email);

      this.RegisterService.forgotPassword(this.email)
      .subscribe(res=>{
        console.log(res.json());
        // if(res.json().success){
        //   this.toastr.successToastr('Your accoutn verified');
         
        // }else{
        //   this.toastr.errorToastr('Account verification failed');
        // }
      })
      }
    )

    
    
}
  
  onSubmit() {
console.log('in');
    this.RegisterService.email.subscribe(
      (email: string) =>{
        this.email = email;
      console.log(this.email);

    const user = {
      password:this.pin,
      email:this.email
    }
    console.log(user);
    this.auth.loginUser(user)
    .subscribe(res=>{
      console.log(res.json());
    })
  })
    //this.router.navigate(['investor']);
}

}
