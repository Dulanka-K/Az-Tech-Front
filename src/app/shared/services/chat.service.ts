import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http:Http) { }

  public loadHistory(HistoryDetails){
    return this.http.post('http://localhost:3000/api/loadHistory',HistoryDetails);
  }
  public sendMsg(Msg){
    return this.http.post('http://localhost:3000/api/saveMsg',Msg);
  }

  groupBy(){
    return this.http.get('http://localhost:3000/api/groupById');
  }

  getProfile(uId) {
    return this.http.get(environment.url+'/userProfile/'+uId);
  }

  unreadMessages(receiveId,sendId) {
    return this.http.get(environment.url+'/unreadMessages/'+receiveId+'/'+sendId);
  }

  magStatus(receiveId,sendId){
    return this.http.post(environment.url+'/setMsgStatus/'+receiveId+'/'+sendId,status);
  }
}
