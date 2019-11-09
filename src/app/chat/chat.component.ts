import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute } from '@angular/router'
import { ChatService } from '../shared/services/chat.service';
import { AuthService } from '../shared/services/auth.service';
import { Subscription, timer} from 'rxjs';
import { switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(
   private chatService : ChatService,
   private router:Router,
   private auth: AuthService,
   private activateRouter:ActivatedRoute,
   
  ) { }

  sub:Subscription;

  history;
  msg;
  receiver=[];
  x;
  name: Array<String>=[];
  selectedName;
  messageAmt = [];

  msgDetail ={
    sendId:'',
    receiveId:'',
    message:''
  }

  histroyDetail={
    senderId:'',
    recieverId:''
  }

  

  ngOnInit() {
    
    const sender = this.auth.currentUser._id;

    this.chatService.groupBy()
    .subscribe(res=>{
      this.receiver=res.json();
      console.log(this.receiver);
      this.receiver.forEach(element => {
        
        console.log(element['_id'])
        this.chatService.getProfile(element['_id']).subscribe(res =>{
          let user = res.json();
            this.name.push(user.firstName+" "+user.lastName)
        })
      
      });
      console.log(this.receiver[0]._id);
      console.log(this.name);
//================================================
      this.receiver.forEach(element => {
        console.log("in");
          if(element['_id'] == sender){
            this.messageAmt.push(null);
          }
          else{
        this.chatService.unreadMessages(element['_id']).subscribe(res =>{
          let amount = res.json();
          this.messageAmt.push(amount);
  
        })
          }
      });

    });

    

    this.activateRouter.queryParams.subscribe(params=>{
      
      this.msgDetail.receiveId=params['receive_id']
      console.log(this.msgDetail.receiveId);
    });
    
    this.msgDetail.sendId=sender;

    this.chatService.getProfile(this.msgDetail.receiveId)
    .subscribe(res=>{
      let user = res.json();
      this.selectedName = user.firstName+" "+user.lastName;
    });
    

    

    this.histroyDetail.recieverId=this.msgDetail.receiveId;
    this.histroyDetail.senderId=this.msgDetail.sendId;
    
    console.log(this.msgDetail.sendId);
    
    this.sub = timer(0,500).pipe(switchMap(()=>this.chatService.loadHistory(this.histroyDetail)))
    .subscribe(result=>{
      this.history=result.json();
    
    },
    err => {
      console.log(err);
    })
  
  
  }

  // loadMsg(){

  //   this.histroyDetail.recieverId=this.msgDetail.receiveId;
  //   this.histroyDetail.senderId=this.msgDetail.sendId;

  //   this.chatService.loadHistory(this.histroyDetail)
  //   .subscribe((res)=>{
  //     console.log(res.json());
  //     this.history=res.json();
  //   })
  // }


  send(){
   
    this.msgDetail.message=this.msg;
    console.log(this.msgDetail);

   this.chatService.sendMsg(this.msgDetail)
   .subscribe((res)=>{
     console.log(res);
    })
   this.msg = null;
  }

  selectChat(id){
    console.log("receiver index:" +id);
    console.log(this.name);
    console.log(this.messageAmt[id].length);

    this.messageAmt[id] = 0;

    this.chatService.magStatus(this.receiver[id]._id)
    .subscribe(res=>{
      console.log(res.json());
    });

    this.selectedName = this.name[id];

    this.histroyDetail.senderId=this.auth.currentUser._id;//sender id

    if(this.receiver[id]._id == this.histroyDetail.senderId)
    {
      return;
    }
    else{
    this.histroyDetail.recieverId=this.receiver[id]._id; //check this(receiver id)
    }

    this.msgDetail.receiveId = this.histroyDetail.recieverId;
    this.msgDetail.sendId = this.histroyDetail.senderId;

    console.log("sender:"+this.histroyDetail.senderId);
    console.log("receiver:"+this.histroyDetail.recieverId);
    
  }

}
