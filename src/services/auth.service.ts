import { LocalStorageService } from './local-storage.service';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpReponse } from 'src/class/HttpResponse.class';
import { Login } from 'src/class/Login.class';
import { Register } from 'src/class/Register.class';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpNoIntercept: HttpClient;
  constructor(
    private httpBackend: HttpBackend,
    private localStorageService: LocalStorageService
  ) {
    this.httpNoIntercept = new HttpClient(this.httpBackend);
  }

  login(loginForms: Login) {
    return this.httpNoIntercept.post<HttpReponse>('http://localhost:4000/v1/authorization/signin', loginForms).pipe(
      tap(res => {
        this.localStorageService.setLocalStorage('token', `Bearer ${res.data}`);
      })
    );
  }
  logout() {
    this.localStorageService.removeLocalStorage('token');
  }

  register(registerForms: Register) {
    return this.httpNoIntercept.post<HttpReponse>('http://localhost:4000/v1/authorization/signup', registerForms)
    .pipe(
      tap(res => {
        this.localStorageService.setLocalStorage('token', `Bearer ${res.data}`);
      })
    );
  }

  getToken() {
    return this.localStorageService.getLocalStorage('token');
  }
}
