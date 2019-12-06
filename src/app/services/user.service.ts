import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public usersServer:Array<User>;
  selectedUser: User;
  readonly URL_API = 'http://localhost:3000/api/users/'
  
  userOn:string;
  constructor(private http:HttpClient) { }

  postUser(user:User){
    return this.http.post(this.URL_API, user);
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.URL_API);
  }
  
}
