import { InvestorService } from 'src/app/investor/shared/services/investor-service.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {


  @Input() requestObject
  reacted = false;

  constructor(
    private investorService: InvestorService,
    private toastr: ToastrManager
  ) {

  }

  ngOnInit() {

  }

  acceptReq() {
    this.investorService.acceptRequests(this.requestObject.id)
      .subscribe(res => {
        if(res.json().success){
          this.toastr.successToastr("Request accepted!");
        }else{
          this.toastr.errorToastr("There is some problem with accepting the request..! Please try again..!");
        }
        this.deleteComplete();
      });
    this.reacted = true;
  }

  rejectReq() {
    this.investorService.rejectRequests(this.requestObject.id)
      .subscribe(res => {
        if(res.json().success){
          this.toastr.successToastr("Request rejected!");
        }else{
          this.toastr.errorToastr("There is some problem with rejecting the request.. Please try again..!");
        }
        this.deleteComplete();
      });
    this.reacted = true;
  }


  @Output()
  react = new EventEmitter<Object>();

  deleteComplete() {
    this.react.emit(this.requestObject);
  }



}