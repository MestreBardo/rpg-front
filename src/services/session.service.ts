import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  sessionCreated = new EventEmitter<any>();
  sessionUpdated = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  getSession(sessionId: string) {
    return this.http.get(`http://localhost:4000/v1/sessions/${sessionId}`);
  };
  createSession(session: any) {
    return this.http.post('http://localhost:4000/v1/sessions', session).pipe(
      tap(
        (res: any) => {
          this.sessionCreated.emit({
              _id: res.data._id,
              campaign: res.data.campaignId,
              sessionDate: res.data.sessionDate,
              createdAt: res.data.createdAt
          }); 
        },
      )
    );
  }


  cancelSession(session: any) {
    return this.http.delete('http://localhost:4000/v1/sessions/'+ session);
  }

  editSessionDate(campaignId: string, campaign: any) {
    return this.http.put(`http://localhost:4000/v1/sessions/${campaignId}`, campaign).pipe(
      tap(
        (received: any) => {
          const session = {
            id: received.data._id,
            name: received.data.name,
            description: received.data.description,
            createdAt: received.data.createdAt,
            group: received.data.group,
            master: received.data.master,
            system: received.data.system,
          };
          this.sessionUpdated.emit(session);
        }
      )
    );
  }

}
