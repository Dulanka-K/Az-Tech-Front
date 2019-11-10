import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';



@Injectable()
export class RegisterService {
  authToken: any;
  user: any;

  constructor(private http: Http) { }

  registerUser(user) {
    return this.http.post(environment.url+'/register', user);
  }

}
