import { CampaignService } from 'src/services/campaign.service';
import { faTrash, faArrowDown, faCalendar, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.sass']
})
export class PlayerCardComponent implements OnInit {

  @Input() member: any;
  @Input() userSigned: any;
  @Input() campaignId: any;
  faTrash = faTrash;
  faCalendar = faCalendar;
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;
  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
  }

  removePlayer(playerId: any) {

  }


}
