import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  contactForm;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrManager
  ) {
    this.contactForm = fb.group({
      email: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  // sendMessage(form) {
  //   console.log(form.value);
  //   this.common.sendMessage({
  //     'email': form.value.email,
  //     'content': form.value.content
  //   }).subscribe(res=>{
  //     if(res.json().success){
  //       this.toastr.successToastr("Your suggestion has been sent successfully..!");
  //     }else{
  //       this.toastr.errorToastr("Making suggestion has some error.. Please try again..!");
  //     }
  //   })

  //   this.contactForm.reset();
  // }

}
