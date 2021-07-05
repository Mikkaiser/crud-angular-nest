import { IUserList } from './../interfaces/user-list.interface';
import { environment } from './../../../../environments/environment';
import { IUser } from './../interfaces/user.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user: any) {
    return this.http.post<IUser>(environment.api, user);
  }

  getAll() {
    return this.http.get<IUserList[]>(environment.api);
  }
}
