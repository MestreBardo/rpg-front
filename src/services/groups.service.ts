import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient) { }
  groupCreated = new EventEmitter<any>();
  groupUpdated = new EventEmitter<any>();
  getUserSignedGroups() {
    return this.http.get('http://localhost:4000/v1/users/groups');
  }

  getGroup(groupId: string) {
    return this.http.get(`http://localhost:4000/v1/groups/${groupId}`);
  }
  

  createGroup(group: any) {
    return this.http.post('http://localhost:4000/v1/groups', group).pipe(
      tap(
        (res: any) => { 
          this.groupCreated.emit({
            group: {
              _id: res.data._id,
              name: res.data.name,
              description: res.data.description,
              createdAt: res.data.createdAt,
              userCount: res.data.userCount,
            },
            role: res.data.me.role,
            joinedAt: res.data.me.joinedAt
          }); 
        },
      )
    );
  }

  findGroups(text: string) { 
    return this.http.get(`http://localhost:4000/v1/groups?name=${text}`);
  }

  editGroupName(groupId: string, group: any) {
    return this.http.patch(`http://localhost:4000/v1/groups/${groupId}/name`, group).pipe(
      tap(
        (received: any) => {
          group = {
            id: received.data._id,
            name: received.data.name,
            description: received.data.description,
            userCount: received.data.userCount,
            isPublic: received.data.isPublic,
            createdAt: received.data.createdAt,
            owner: received.data.owner,
          };
          this.groupUpdated.emit(group);
        }
      )
    );
  }

  editGroupInfo(groupId: string, group: any) {
    return this.http.put(`http://localhost:4000/v1/groups/${groupId}`, group).pipe(
      tap(
        (received: any) => {
          group = {
            id: received.data._id,
            name: received.data.name,
            description: received.data.description,
            userCount: received.data.userCount,
            isPublic: received.data.isPublic,
            createdAt: received.data.createdAt,
            owner: received.data.owner,
          };
          this.groupUpdated.emit(group);
        }
      )
    );
  }

  getGroupMembers(groupId: string) {
    return this.http.get(`http://localhost:4000/v1/groups/${groupId}/members`);
  }

  getGroupCampaigns(groupId: string) {
    return this.http.get(`http://localhost:4000/v1/groups/${groupId}/campaigns`);
  }

}
