import { CampaignService } from 'src/services/campaign.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.sass']
})
export class AddPlayersComponent implements OnInit {
  @Input() campaignId: string = "";
  @Output() finishAddingPlayers = new EventEmitter<boolean>();
  faTimes = faTimes;
  faPlus = faPlus;
  foundedUsers: any[] = [];
  constructor(
    private formBuilder: FormBuilder, private toaster: ToastrService, private campaignService: CampaignService
  ) { }

  searchPlayersForms = this.formBuilder.group({
    username: ['', [Validators.required]]
  });
  ngOnInit(): void {

  }

  searchPlayers() {
    this.campaignService.verifyPlayersCampaign(this.campaignId, this.searchPlayersForms.value.username).subscribe(
      (data: any) => {
        this.foundedUsers = data.data;
      }
    );
  }

  addPlayer(userId: string) {
    console.log(userId);
    this.campaignService.addPlayerToCampaign(this.campaignId, userId).subscribe(
      (data: any) => {
        this.toaster.success("Jogador Adicionado a campanha", "Sucesso");
        this.foundedUsers = this.foundedUsers.filter(user => user.user._id !== userId);
      }
    );
  }

}
