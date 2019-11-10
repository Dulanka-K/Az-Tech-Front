import { Injectable,EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

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

viewIdea(uId){
    return this.http.get(environment.url+'/viewidea/'+uId);
}

viewIdeaById(iId){
    return this.http.get(environment.url+'/viewideabyid/'+iId);
}
deleteIdea(iId){
    return this.http.delete(environment.url+'/deleteidea/'+iId);
}

categoryView(category){
    return this.http.get(environment.url+'/categoryview/'+category);
}
viewAllUsers(role){
    return this.http.get(environment.url+'/viewAllUsers/'+role);
    
}
removeUser(uId){
    return this.http.delete(environment.url+'/removeUser/'+uId);
}
warn(email){
    return this.http.get(environment.url+'/warn/'+email);

}
ideas = new EventEmitter<string>() /*take ideas to a string array*/
/*take all users to a string array*/
boostedIdeas(status){
    return this.http.get(environment.url+'/boostedIdeas/'+status);
}
}
