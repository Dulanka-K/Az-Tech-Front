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

  // uploadImage(img) {
  //   return this.http.post('https://guarded-beyond-19031.herokuapp.com/uploadImage', img);
  // }
  
  // getAllSubjects() {
  //   return this.http.get("https://guarded-beyond-19031.herokuapp.com/subject");
  // }

  getAllRequests(email) {
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/viewAllRequests', { 'investor': email });
  }

  addAchievement(achievment) {
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/addAchievement', achievment);
  }

  getAchievements(email) {
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/getAchievements', { 'investor': email });
  }

  deleteAchievement(p) {
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/deleteAchievement', p);
  }

  hideAchievement(p) {
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/toggleAchievement', p);
  }

  acceptRequests(id) {
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/acceptRequest', { 'id': id });
  }

  rejectRequests(id) {
    return this.http.post('https://guarded-beyond-19031.herokuapp.com/rejectRequest', { 'id': id });
  }

  

  // ========= Boost ==========

  boost(investor) {
    return this.http.post("https://guarded-beyond-19031.herokuapp.com/boost", investor);
  }

  getCount(investor) {
    return this.http.post("https://guarded-beyond-19031.herokuapp.com/getCount", investor);
  }

  acceptBoost(boost) {
    return this.http.post("https://guarded-beyond-19031.herokuapp.com/boostProfile", boost);
  }

  renewBoost(boost) {
    return this.http.post("https://guarded-beyond-19031.herokuapp.com/renewBoost", boost);
  }


  getNews(){
    return this.http.get("https://guarded-beyond-19031.herokuapp.com/getNews");
  }

  uploadAchievementImage(file){
    return this.http.post("https://guarded-beyond-19031.herokuapp.com/uploadAchievementImage", file);
  }


  graphService(subject){
    return this.http.post("https://guarded-beyond-19031.herokuapp.com/graph", subject);
  }



}
