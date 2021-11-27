import { LocalStorageService } from './local-storage.service';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  editUserUsername(user: any) { 
    return this.http.patch(`http://localhost:4000/v1/users/username`, user).pipe(
      tap(
        (response: any) => {
          this.localStorageService.setLocalStorage('token', `Bearer ${response.data}`);
        }
      )
    )
  }

  editUserPassword(user: any) { 
    return this.http.patch(`http://localhost:4000/v1/users/password`, user).pipe(
      tap(
        (response: any) => {
          this.localStorageService.setLocalStorage('token', `Bearer ${response.data}`);
        }
      )
    )
  }

  editUserEmail(user: any) {
    return this.http.patch(`http://localhost:4000/v1/users/email`, user).pipe(
      tap(
        (response: any) => {
          this.localStorageService.setLocalStorage('token', `Bearer ${response.data}`);
        }
      )
    )
  }

  editUserInfo(user: any) {
    Object.keys(user).forEach(key => {
      if (!user[key]) {
        delete user[key];
      }
    })
    return this.http.put(`http://localhost:4000/v1/users`, user).pipe(
      tap(
        (response: any) => {
          this.localStorageService.setLocalStorage('token', `Bearer ${response.data}`);
        }
      )
    )
  }

  getMe() {
    return this.http.get(`http://localhost:4000/v1/users/me`);
  }

}
