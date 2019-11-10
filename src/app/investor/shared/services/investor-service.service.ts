import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class InvestorService {

  constructor(
    private http: Http
  ) { }

  getInvestorProfile(uId) {
    return this.http.get(environment.url+'/userProfile/'+uId);
  }

  editProfile(uId,user) {
    return this.http.put(environment.url+'/editProfile/'+uId,user);
  }

  uploadImage(selectedFile: File,uId) {
    const fd = new FormData();
    fd.append('image', selectedFile, selectedFile.name);
    return this.http.post(environment.url+'/userImageUpload/'+uId,fd);
  }

  categoryView(category){
    return this.http.get(environment.url+'/categoryview/'+category);
  }
  ideas = new EventEmitter<string>()

  viewIdeaById(iId){
    return this.http.get(environment.url+'/viewideabyid/'+iId);
  }

  viewComment(iId){
    return this.http.get(environment.url+'/viewcomment/'+iId);
  }

  sendRequest(fId,tId,iId,request){
    return this.http.post(environment.url+'/sendRequest/'+fId+'/'+tId+'/'+iId,request);
  }

  getInvestedIdeas(uId){
    return this.http.get(environment.url+'/investedideas/'+uId);
  }

  requestStatus(uId,iId){
    return this.http.get(environment.url+'/requeststatus/'+uId+'/'+iId);
  }

  boostedIdeas(status){
    return this.http.get(environment.url+'/boostedIdeas/'+status);
  }

  changePassword(resetpassword,id){
    return this.http.put(environment.url+'/editUserProfile/'+id,resetpassword);
  }




}
