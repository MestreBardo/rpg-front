import { CampaignService } from './../../services/campaign.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupsService } from './../../services/groups.service';
import { faCalendar, faUnlockAlt, faUsers, faPencilAlt, faUser, faSignOutAlt, faJournalWhills } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayersService } from 'src/services/players.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.sass']
})
export class CampaignComponent implements OnInit, OnDestroy {

  subscribedServices: any[] = [];
  isAddingPlayer = false;
  faCalendar = faCalendar;
  faUnlockAlt = faUnlockAlt;
  faUsers = faUsers;
  faPencilAlt = faPencilAlt;
  faJournalWhills = faJournalWhills;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  campaignId: string = "";
  isEditingCampaign: boolean = false;
  isCreatingSession: boolean = false;
  lookingFor: string = "players";
  
  me: any = {}
  campaign: any = {name: "Default Name", description: "Default Description", userCount: 0, isPublic: true, master: {username: "Default Username"}};
  constructor(private groupService: GroupsService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private campaignService: CampaignService,
    private playerService: PlayersService,
    private toaster: ToastrService) { 
    this.subscribedServices.push(this.activatedRoute.params.subscribe(params => {
      this.campaignId = params['id'];
    }));

    this.subscribedServices.push(this.activatedRoute.queryParams.subscribe(params => {
      this.lookingFor = params.look || 'players';
    }));

    this.subscribedServices.push(this.campaignService.campaignUpdated.subscribe((campaign: any) => {
      this.campaign = campaign;
    }));

    
  }

  ngOnInit(): void {
    this.isEditingCampaign = false;
    this.campaignService.getCampaign(this.campaignId).subscribe((received: any) => {
      this.campaign = {
        id: received.data._id,
        name: received.data.name,
        description: received.data.description,
        createdAt: received.data.createdAt,
        master: received.data.master,
        system: received.data.system,
        group: received.data.group
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

  editingCampaign(received: any) {
    this.isEditingCampaign = received;
  }

  acessCharacter() {
    this.router.navigate(["/campaign", this.campaignId, "character", this.me._id]);
  }

  creatingSession(received: any){
    this.isCreatingSession = received;
  }

  addingPlayers(received: any) {
    this.isAddingPlayer = received;
  }

  leaveCampaign() {
    this.playerService.leaveCampaign(this.me._id)
    .subscribe((received: any) => {
      this.toaster.success("You have left the campaign");
      this.router.navigate(["/home"]);
    },
    (error: any) => this.toaster.error(error.error.data.message ?? error));
  }

  ngOnDestroy() {
    this.subscribedServices.forEach(sub => sub.unsubscribe());
  }

}
