import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  campaignCreated = new EventEmitter<any>();
  campaignUpdated = new EventEmitter<any>();
  playerAdded = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

  getUserSignedCampaigns() {
    return this.http.get('http://localhost:4000/v1/users/campaigns');
  }
  getCampaign(campaignId: string) {
    return this.http.get(`http://localhost:4000/v1/campaigns/${campaignId}`);
  };

  getCampaignSessions(campaignId: string) {
    return this.http.get(`http://localhost:4000/v1/campaigns/${campaignId}/sessions`);
  }

  getCampaignPlayers(campaignId: string) {
    return this.http.get(`http://localhost:4000/v1/campaigns/${campaignId}/players`);
  };

  createCampaign(campaign: any) {
    return this.http.post('http://localhost:4000/v1/campaigns', campaign).pipe(
      tap(
        (res: any) => {
          this.campaignCreated.emit({
            info: {
              _id: res.data._id,
              name: res.data.name,
              description: res.data.description,
              createdAt: res.data.createdAt,
            },
            role: res.data.me.role,
            joinedAt: res.data.me.joinedAt
          }); 
        },
      )
    );
  }


  addPlayerToCampaign(campaignId: string, user: string) {
    return this.http.post(`http://localhost:4000/v1/campaigns/${campaignId}/player`, { user })
    .pipe(
      tap(
        (received: any) => { this.playerAdded.emit(received.data); }
      )
    );
  }

  verifyPlayersCampaign(campaignId: string, username: string) {
    return this.http.get(`http://localhost:4000/v1/campaigns/${campaignId}/verify?username=${username}`);
  }
  
  saveTemplate(campaignId: string, template: any) {
    return this.http.patch(`http://localhost:4000/v1/campaigns/${campaignId}/template`, template);
  }

  editCampaignName(campaignId: string, campaign: any) {
    return this.http.patch(`http://localhost:4000/v1/campaigns/${campaignId}/name`, campaign).pipe(
      tap(
        (received: any) => {
          const campaign = {
            id: received.data._id,
            name: received.data.name,
            description: received.data.description,
            createdAt: received.data.createdAt,
            group: received.data.group,
            master: received.data.master,
            system: received.data.system,
          };
          this.campaignUpdated.emit(campaign);
        }
      )
    );
  }

  editCampaignInfo(campaignId: string, campaign: any) {
    return this.http.put(`http://localhost:4000/v1/campaigns/${campaignId}`, campaign).pipe(
      tap(
        (received: any) => {
          const campaign = {
            id: received.data._id,
            name: received.data.name,
            description: received.data.description,
            createdAt: received.data.createdAt,
            group: received.data.group,
            master: received.data.master,
            system: received.data.system,
          };
          this.campaignUpdated.emit(campaign);
        }
      )
    );
  }
}
