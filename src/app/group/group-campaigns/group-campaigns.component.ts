import { GroupsService } from './../../../services/groups.service';
import { CampaignService } from './../../../services/campaign.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-group-campaigns',
  templateUrl: './group-campaigns.component.html',
  styleUrls: ['./group-campaigns.component.sass']
})
export class GroupCampaignsComponent implements OnInit, OnDestroy {
  @Input() groupId: any;
  @Output() initCreatingCampaign = new EventEmitter<any>();
  subscribedServices: any[] = [];
  campaigns: any = [];
  faPlus = faPlus;
  constructor(private campaignService: CampaignService, private toaster: ToastrService, private groupService: GroupsService) {
    this.subscribedServices.push(this.campaignService.campaignCreated.subscribe((campaign: any) => {
      this.campaigns.push(campaign);
    }));
   }

  ngOnInit(): void {
    this.getCampaigns();
  }

  private getCampaigns() { 
    this.groupService.getGroupCampaigns(this.groupId).subscribe((received: any) => {
      this.campaigns = received.data.map(
        (data: any) => {
          return {
            info: {
              _id: data._id,
              name: data.name,
              description: data.description,
              createdAt: data.createdAt,
            },
            role: data.me.role,
            joinedAt: data.me.joinedAt
          }
        }
      )
    });
  }

  ngOnDestroy(): void {
    this.subscribedServices.forEach(service => service.unsubscribe());
  }


}
