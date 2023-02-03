import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { reciepeApi, signUpApi } from '../environment';
import { signInApi } from '../environment';
import { CreateUser } from '../Models/userModel';
import { SignInUser } from '../Models/userModel';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  createUser(data:CreateUser){
    return this.http.post(signUpApi,data);
  }

  signInUser(data:SignInUser){
    return this.http.post(signInApi,data);
  }

  getReceiepes(){
    return this.http.get(reciepeApi)
  }
}