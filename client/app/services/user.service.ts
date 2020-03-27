import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { User } from "../shared/models/user.model";
import { Vote } from "../shared/models/vote.model";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>("http://173.193.92.5:30837/api/user", user);
  }

  login(credentials: any): Observable<any> {
    return this.http.post("http://173.193.92.5:30837/api/login", credentials);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://173.193.92.5:30837/api/users");
  }

  countUsers(): Observable<number> {
    return this.http.get<number>("http://173.193.92.5:30837/api/users/count");
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>("http://173.193.92.5:30837/api/user", user);
  }

  getUser(user: User): Observable<User> {
    return this.http.get<User>(`http://173.193.92.5:30837/api/user/${user._id}`);
  }

  editUser(user: User): Observable<any> {
    return this.http.put(`http://173.193.92.5:30837/api/user/${user._id}`, user, {
      responseType: "text"
    });
  }

  deleteUser(user: User): Observable<any> {
    return this.http.delete(`http://173.193.92.5:30837/api/user/${user._id}`, { responseType: "text" });
  }

  vote(vote: Vote): Observable<Vote> {
    return this.http.post("http://173.193.92.5:30837/api/user/vote", vote);
  }
}
