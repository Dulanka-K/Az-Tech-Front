import { Injectable,EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';


@Injectable()
export class professionalService {

    constructor(
        private http: Http,
    ) { }


    d: string = 'all';
    s: string = 'all';

    private subject = new Subject<any>();
    
    getProfessionalProfile(uId) {
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

    addIdea(uId,idea){
        return this.http.post(environment.url+'/addidea/'+uId,idea);
    }

    viewIdea(uId){
        return this.http.get(environment.url+'/viewidea/'+uId);
    }

    viewIdeaById(iId){
        return this.http.get(environment.url+'/viewideabyid/'+iId);
    }

    editIdea(iId,idea) {
        return this.http.put(environment.url+'/editidea/'+iId,idea);
    }

    deleteIdea(iId){
        return this.http.delete(environment.url+'/deleteidea/'+iId);
    }

    categoryView(category){
        return this.http.get(environment.url+'/categoryview/'+category);
    }
    ideas = new EventEmitter<string>()

    updateIdeaup(iId,vote) {
        return this.http.put(environment.url+'/updateideaup/'+iId,vote);
    }

    updateIdeadown(iId,vote) {
        return this.http.put(environment.url+'/updateideadown/'+iId,vote);
    }

    addComment(iId,uId,comment){
        return this.http.post(environment.url+'/addcomment/'+iId+'/'+uId,comment);
    }

    viewComment(iId){
        return this.http.get(environment.url+'/viewcomment/'+iId);
    }

    viewRequest(uId){
        return this.http.get(environment.url+'/viewRequest/'+uId);
    }

    setStatus(uId,rId,statu) {
        return this.http.put(environment.url+'/status/'+uId+'/'+rId,statu);
    }
    
    boostIdea(iId,status) {
        return this.http.put(environment.url+'/boost/'+iId,status);
    }

    boostedIdeas(status){
        return this.http.get(environment.url+'/boostedIdeas/'+status);
    }

    changePassword(resetpassword,id){
        return this.http.put(environment.url+'/editUserProfile/'+id,resetpassword);
    }


}
