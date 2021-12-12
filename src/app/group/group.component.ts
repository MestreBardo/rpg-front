import { CampaignService } from './../../services/campaign.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupsService } from './../../services/groups.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faCalendar, faPencilAlt, faUnlockAlt, faUsers, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.sass']
})
export class GroupComponent implements OnInit, OnDestroy {
  subscribedServices: any[] = [];
  faCalendar = faCalendar;
  faUnlockAlt = faUnlockAlt;
  faUsers = faUsers;
  faPencilAlt = faPencilAlt;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  groupId: string = "";
  isEditingGroup: boolean = false;
  isCreatingCampaign: boolean = false;
  lookingFor: string = "members";
  me: any = {}
  group: any = {name: "Default Name", description: "Default Description", userCount: 0, isPublic: true, owner: {username: "Default Username"}};
  constructor(private groupService: GroupsService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private campaignService: CampaignService,
    private toaster: ToastrService)  { 
    this.subscribedServices.push(this.activatedRoute.params.subscribe(params => {
      this.groupId = params['id'];
    }));

    this.subscribedServices.push(this.activatedRoute.queryParams.subscribe(params => {
      this.lookingFor = params.look || 'members';
    }));

    this.subscribedServices.push(this.groupService.groupUpdated.subscribe((group: any) => {
      this.group = group;
    }));

    
  }

  ngOnInit(): void {
    this.isEditingGroup = false;
    this.groupService.getGroup(this.groupId).subscribe((received: any) => {
      this.group = {
        id: received.data._id,
        name: received.data.name,
        description: received.data.description,
        userCount: received.data.userCount,
        isPublic: received.data.isPublic,
        createdAt: received.data.createdAt,
        owner: received.data.owner,
      };
      this.me = received.data.me;
    });
  }
  goTo(param: string) {
    this.router.navigate(
      [], 
      {
        relativeTo: this.activatedRoute,
        queryParams: { look: param },
        queryParamsHandling: 'merge'
      });    
  };

  joinGroup(){
    this.groupService.joinGroup(this.groupId).subscribe((received: any) => {
      this.group = {
        id: received.data._id,
        name: received.data.name,
        description: received.data.description,
        userCount: received.data.userCount,
        isPublic: received.data.isPublic,
        createdAt: received.data.createdAt,
        owner: received.data.owner,
      };
      this.me = received.data.me;
    }, 
    (error: any) => {
      this.toaster.error(error.error.message);
    });
  }

  leaveGroup(){
    this.groupService.leaveGroup(this.groupId).subscribe((received: any) => {
      this.group = {
        id: received.data._id,
        name: received.data.name,
        description: received.data.description,
        userCount: received.data.userCount,
        isPublic: received.data.isPublic,
        createdAt: received.data.createdAt,
        owner: received.data.owner,
      };
      this.me = received.data.me;
    },
    (error: any) => {
      this.toaster.error(error.error.data.message ?? error);
    });
  }

  editingGroup(received: any) {
    this.isEditingGroup = received;
  }
  creatingCampaign(received: any) {
    this.isCreatingCampaign = received;
  }

  ngOnDestroy() {
    this.subscribedServices.forEach(sub => sub.unsubscribe());
  }

}
