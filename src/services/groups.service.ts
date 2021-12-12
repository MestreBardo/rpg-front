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
  userGroupJoined = new EventEmitter<any>();
  userGroupRemoved = new EventEmitter<any>();
  getUserSignedGroups() {
    return this.http.get('http://localhost:4000/v1/users/groups');
  }

  getGroup(groupId: string) {
    return this.http.get(`http://localhost:4000/v1/groups/${groupId}`);
  }

  joinGroup(groupId: string) {
    return this.http.patch(`http://localhost:4000/v1/groups/${groupId}/join`, {}).pipe(tap(
      (res: any) => {
        const {newMember} = res.data
        this.userGroupJoined.emit(
          {
            id: newMember._id,
            userId: newMember.user._id,
            username: newMember.user.username,
            joinedAt: newMember.joinedAt,
            role: newMember.role
          }
        );

      }
    ));
  }
  
  leaveGroup(groupId: string) {
    return this.http.delete(`http://localhost:4000/v1/groups/${groupId}/leave`).pipe(tap(
      (res: any) => {
        this.userGroupRemoved.emit(res.data.removedUser);
      }
    ));
  }

  removeMember(groupId: string, memberId: string){
    return this.http.delete(`http://localhost:4000/v1/groups/${groupId}/member/${memberId}`).pipe(tap(
      (res: any) => {
        this.userGroupRemoved.emit(res.data.removedUser);
      }
    ));
  }

  removeGroup(groupId: string) {
    return this.http.delete(`http://localhost:4000/v1/groups/${groupId}/leave`).pipe(tap(
      (res: any) => {
        this.userGroupRemoved.emit(res.data.removedUser);
      }
    ));
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

  promoteMember(groupId: string, memberId: string){
    return this.http.patch(`http://localhost:4000/v1/groups/${groupId}/promote/${memberId}`, {})
  }
  
  demoteMember(groupId: string, memberId: string){
    return this.http.patch(`http://localhost:4000/v1/groups/${groupId}/demote/${memberId}`, {})
  }
}
