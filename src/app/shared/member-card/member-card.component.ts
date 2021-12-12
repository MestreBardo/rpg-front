import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTrash, faCalendar, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { GroupsService } from 'src/services/groups.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.sass']
})
export class MemberCardComponent implements OnInit {
  @Input() member: any;
  @Input() userSigned: any;
  @Input() groupId: any;
  @Output() removedMember = new EventEmitter<string>();
  faTrash = faTrash;
  faCalendar = faCalendar;
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;
  constructor(private groupService: GroupsService, private toaster: ToastrService) { }

  ngOnInit(): void {
  }

  removeMember(memberId: string){
    this.groupService.removeMember(this.groupId, memberId).subscribe((received: any) => {
      this.toaster.success('Member removed successfully');
      this.removedMember.emit(memberId);
    },
    (error: any) => {
      this.toaster.error('Error removing member');
    });
  }

  promoteMember(member: any){
    this.groupService.promoteMember(this.groupId, member.id).subscribe((received: any) => {
      member.role = 'admin'
    })
  }

  demoteMember(member: any){
    this.groupService.demoteMember(this.groupId, member.id).subscribe((received: any) => {
      member.role = 'user'
    })
  }

}
