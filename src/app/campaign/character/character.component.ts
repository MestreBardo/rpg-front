import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PlayersService } from 'src/services/players.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.sass']
})
export class CharacterComponent implements OnInit {


  campaignId = "";
  memberId = "";
  me: any = {};
  user: any = {};

  template = {
    type: "column",
    size: "12",
    index: 0,
    childrens: [

    ],
    actualIndex: 1,
  }
  constructor( 
    private activeRoute: ActivatedRoute,
    private PlayerService: PlayersService, 
    private toaster: ToastrService,
    private router: Router
  ) { 
    this.activeRoute.params.subscribe(params => {
      this.campaignId = params.id;
      this.memberId = params.characterId;
    });
  }


  ngOnInit(): void {
    this.PlayerService.getCharacter(this.memberId).subscribe(
      (data: any) => {
        this.user = data.data;
        this.template = data.data.template;
        this.me = data.data.me;

        console.log(data.data);
      }
    )
  }

  saveCharacter() {
    this.PlayerService.updateCharacter(this.memberId, this.template).subscribe(
      (data: any) => {
        this.toaster.success("Saved");
      }
    )
  }

  returnCampaign() {
    this.router.navigate(['/campaign', this.campaignId]);
  }





  

}
