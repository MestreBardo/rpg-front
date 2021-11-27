import { GroupsService } from './../../../services/groups.service';
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-group-members',
  templateUrl: './group-members.component.html',
  styleUrls: ['./group-members.component.sass']
})
export class GroupMembersComponent implements OnInit {
  @Input() groupId: any;
  @Input() me: any;
  members: any[] = [];
  constructor(private groupService: GroupsService, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.groupService.getGroupMembers(this.groupId).subscribe(
      (received: any) => {
        this.members = received.data.map((member: any) => {
          return {
            id: member._id,
            userId: member.user._id,
            username: member.user.username,
            joinedAt: member.joinedAt,
            role: member.role
          };
        });
      },
      (error: any) => {
        this.toaster.error(error.error.data);
      }
    );
  }

}
