import { CampaignService } from 'src/services/campaign.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-campaign-players',
  templateUrl: './campaign-players.component.html',
  styleUrls: ['./campaign-players.component.sass']
})
export class CampaignPlayersComponent implements OnInit, OnDestroy {
  @Input() campaignId: string = "";
  @Input() me: any;
  @Output() initAddingPlayers = new EventEmitter<any>();
  players: any[] = [];
  faPlus = faPlus;
  subscriptions: any[] = [];
  constructor(private campaignService: CampaignService) { 
    this.subscriptions.push(this.campaignService.playerAdded.subscribe(
      (data: any) => { 
        this.players.push({
          campaign: data.campaign,
          joinedAt: data.joinedAt,
          role: data.role,
          user: {
            _id: data.user._id,
            username: data.user.username,
          }
        });
      }
    ));
  }

  ngOnInit(): void {
    this.campaignService.getCampaignPlayers(this.campaignId).subscribe(
      (data: any) => {
        this.players = data.data;
        console.log(this.players);
      }
    )
  }

  removePlayer(index: number) {
    this.players.splice(index, 1);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
