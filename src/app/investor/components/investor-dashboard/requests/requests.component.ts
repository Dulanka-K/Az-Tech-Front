import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { InvestorService } from 'src/app/investor/shared/services/investor-service.service';
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {


  requests = []

  constructor(
    private investorService: InvestorService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    let email = this.authService.currentUser.user.email;
    this.investorService.getAllRequests(email)
      .subscribe(res=>{
        this.requests = res.json().request;
      })
  }

  removeRequest(reqObj){
    this.requests.splice(this.requests.indexOf(reqObj), 1);
  }


}
