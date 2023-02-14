import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import User from 'src/models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser=new User(0,"","","","","",new Date(),0,"","");
  baseRouteUrl=`${environment.baseUrl} `
 
  constructor(public http:HttpClient) { }
  
  addUser(user:User){
    return this.http.post<object>(`${this.baseRouteUrl}`, user)
  }
  getAllUsers( ){
    return this.http.get<User[]>(`${this.baseRouteUrl}`)
}
// getUserByTZ(TZ: string) {
//   return this.http.get<User>(`${this.baseRouteUrl}/${TZ}`)
// }
}
