import { AuthService } from 'src/services/auth.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // add authorization header with basic auth credentials if available
      const token = this.authService.getToken();
      if (token) {
          request = request.clone({
              setHeaders: { 
                Authorization: `${token}`
              }
          });
      }

      return next.handle(request);
    }
}
