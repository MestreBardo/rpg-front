import { GroupsService } from './../../../services/groups.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.sass']
})
export class MyGroupsComponent implements OnInit {
  groups: any[] = [];
  faplus = faPlus;
  @Output() initCreatingGroup = new EventEmitter<any>();
  constructor(private groupsService: GroupsService, private toaster: ToastrService) { 
    this.groupsService.groupCreated.subscribe(
      received => {
        this.groups.push({
          info: received.group,
          role: received.role
        });
      }
    )

  }


  ngOnInit(): void {
    this.groupsService.getUserSignedGroups().subscribe(
      (res: any) => {
        this.groups = res.data.map((received: any) => {
          return {
            info: received.group,
            role: received.role
          }
        })
      },
      (err: any) => {
        this.toaster.error(err.error.message, "Erro");
      }
    );
  }

}
