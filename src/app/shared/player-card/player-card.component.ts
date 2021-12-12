import { CampaignService } from 'src/services/campaign.service';
import { faTrash, faArrowDown, faCalendar, faArrowUp, faUser } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayersService } from 'src/services/players.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.sass']
})
export class PlayerCardComponent implements OnInit {

  @Input() member: any;
  @Input() userSigned: any;
  @Input() campaignId: any;
  @Output() playerRemoved = new EventEmitter<any>();
  faTrash = faTrash;
  faUser = faUser;
  faCalendar = faCalendar;
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;
  constructor(
    private campaignService: CampaignService, 
    private playerService: PlayersService,
    private toaster: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  removePlayer(playerId: any) {
    this.playerService.removePlayer(playerId).subscribe(
      (response: any) => {
        this.toaster.success('Player removed successfully');
        this.playerRemoved.emit(playerId);
      },
      (error: any) => {
        this.toaster.error('Error removing player');
      } 
    )
  }

  acessCharacter() {
    this.router.navigate(["/campaign", this.campaignId, "character", this.member._id]);
  }


}
