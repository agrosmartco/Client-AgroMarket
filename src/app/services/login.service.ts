import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { User } from "../models/user";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  createUser(user: User) {

    return this.http.post(`${this.API_URI}`, user)

  }

  sendCredentials(credentials: Login) {

    return this.http.post(`${this.API_URI}/login`, credentials)

  }

}
