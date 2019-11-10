import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { RegisterService } from 'src/app/shared/services/register.service'


@Component({
  selector: 'app-login-investor',
  templateUrl: './login-investor.component.html',
  styleUrls: ['./login-investor.component.css']
})
export class LoginInvestorComponent implements OnInit {

  form: FormGroup;
  loginErr: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private RegisterService:RegisterService,
    private toastr: ToastrManager

  ) { 
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
    if(this.authService.currentUser){
      if(this.authService.currentUser.role === "professional"){
        this.router.navigate(['professional']);
      }else{
        this.router.navigate(['investor']);
      }
    }
  }


  onSubmit(form){
    //when submit only for valid
    if(!this.form.valid){
      return;
    }
    let user = form.value;
    //user['role'] = 'investor';
    this.authService.loginUser(user).
      subscribe(response=>{
        console.log(response.json());
        let res = response.json();
        if(res.success){
          this.toastr.successToastr('Login successfully', 'Success!');
          localStorage.setItem('token', res.token);
          if(this.authService.currentUser){
            if(this.authService.currentUser.role === "professional"){
              this.router.navigate(['professional']);
            }else if(this.authService.currentUser.role === "admin"){
              this.router.navigate(['admin-dashboard']);
            }else{
              this.router.navigate(['investor']);
            }}
          //window.location.reload();
        }else{
          if(!res.confirmed){
            this.router.navigate(['verify', {'email': response.json().email, 'role':'investor'}]);
            this.toastr.warningToastr('Please comfirm your email');
          }else{
            this.loginErr = true;
            this.toastr.errorToastr('Login error, Check username or password.', 'Oops!');
          }
        }
      }, err=>{
        this.loginErr = true;
        this.toastr.errorToastr('Login error, Check username or password.', 'Oops!');
      });   
      this.form.reset();     
  }

  get email(){return this.form.get('email')}
  get password(){return this.form.get('password')}

  forgotPassword(email){
    console.log(email)
    this.RegisterService.email.emit(email);
}

}



