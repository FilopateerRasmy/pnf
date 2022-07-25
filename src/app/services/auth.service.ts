import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILogin } from '../shared/models/ilogin';
import { IResponse } from '../shared/models/iresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + 'systemuser/login'
  constructor(private http:HttpClient) { }
  user$ = new BehaviorSubject<null|ILogin>(null)


  login(email:string, password:string){
    return this.http.post<IResponse<ILogin>>(this.baseUrl, {email, password})
  }
  saveUserToLocalStorage(data:ILogin){

    localStorage.setItem("currentuser",JSON.stringify(data))
  }
  getUserFromLocalStorage(){
    const user = <null | ILogin>JSON.parse(<string>localStorage.getItem("currentuser")) ;
    if(user){
      this.user$.next(user)
      return user
    }else{
      this.user$.next(null)
      return null
    }
  }
}
