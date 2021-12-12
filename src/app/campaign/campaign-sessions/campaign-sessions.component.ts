import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { CampaignService } from 'src/services/campaign.service';
import { GroupsService } from 'src/services/groups.service';
import { SessionService } from 'src/services/session.service';

@Component({
  selector: 'app-campaign-sessions',
  templateUrl: './campaign-sessions.component.html',
  styleUrls: ['./campaign-sessions.component.sass']
})
export class CampaignSessionsComponent implements OnInit {

  @Input() campaignId: any;
  @Input() me: any;
  @Output() initCreatingSession = new EventEmitter<any>();
  subscribedServices: any[] = [];
  sessions: any = [];
  faPlus = faPlus;
  constructor(private campaignService: CampaignService, private sessionService: SessionService, private toaster: ToastrService) {
    this.subscribedServices.push(this.sessionService.sessionCreated.subscribe((session: any) => {
      this.sessions.push(session);
    }));
   }

  ngOnInit(): void {
    this.getSessions();
  }

  removeSession(index: number) {
    this.sessions.splice(index, 1);
  }

  private getSessions() { 
    this.campaignService.getCampaignSessions(this.campaignId).subscribe((received: any) => {
      this.sessions = received.data.map(
        (data: any) => {
          return {
            _id: data._id,
            campaign: data.campaignId,
            sessionDate: data.sessionDate,
            createdAt: data.createdAt
          }
        }
      )
    });
  }

  ngOnDestroy(): void {
    this.subscribedServices.forEach(service => service.unsubscribe());
  }


}
