import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-login-professional',
  templateUrl: './login-professional.component.html',
  styleUrls: ['./login-professional.component.css']
})
export class LoginProfessionalComponent implements OnInit {

  form;
  loginErr: boolean = false;

  spinner = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    public toastr: ToastrManager
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
    this.spinner = true;
    let user = form.value;
    user['role'] = 'professional';
    this.authService.loginUser(user).
      subscribe(response=>{
        this.spinner = false;
        console.log(response.json());
        let res = response.json();

        if(res.success){
          this.toastr.successToastr('Login successfully.', 'Success!');
          localStorage.setItem('token', res.token);
          //window.location.reload();
          if(this.authService.currentUser){
            if(this.authService.currentUser.role === "professional"){
              this.router.navigate(['professional']);
            }else if(this.authService.currentUser.role === "admin"){
              this.router.navigate(['admin-dashboard']);
            }else{
              this.router.navigate(['investor']);
            }}
        }else{
          if(!response.json().confirmed){
            this.router.navigate(['verify', {'email': response.json().email, 'role':'professional'}]);
            this.toastr.warningToastr('Please comfirm your email');
          }else{
            this.loginErr = true; 
            this.toastr.errorToastr('Login error, Check username or password.', 'Oops!');
          }

        }
      },
      err => {
        this.loginErr = true;
        this.toastr.errorToastr('Login error, Check username or password.', 'Oops!');
      });   
      
      this.form.reset();     
  }

  get email(){return this.form.get('email')}
  get password(){return this.form.get('password')}

}

