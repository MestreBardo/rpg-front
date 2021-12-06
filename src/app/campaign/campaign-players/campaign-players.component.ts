import { CampaignService } from 'src/services/campaign.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-campaign-players',
  templateUrl: './campaign-players.component.html',
  styleUrls: ['./campaign-players.component.sass']
})
export class CampaignPlayersComponent implements OnInit {
  @Input() campaignId: string = "";
  @Input() me: any;
  @Output() initAddingPlayers = new EventEmitter<any>();
  players: any[] = [];
  faPlus = faPlus;
  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.campaignService.getCampaignPlayers(this.campaignId).subscribe(
      (data: any) => {
        this.players = data.data;
      }
    )
  }

}
