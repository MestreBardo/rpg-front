import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CampaignService } from 'src/services/campaign.service';

@Component({
  selector: 'app-my-campaigns',
  templateUrl: './my-campaigns.component.html',
  styleUrls: ['./my-campaigns.component.sass']
})
export class MyCampaignsComponent implements OnInit {
  campaigns: any[] = [];
  constructor(private campaignService: CampaignService, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.campaignService.getUserSignedCampaigns().subscribe(
      (res: any) => {
        this.campaigns = res.data.map((received: any) => {
          return {
            info: received.campaign,
            role: received.role
          }
        })
      },
      (err: any) => {
        this.toaster.error(err.error.data.message || err, "Erro");
      }
    );
  }

}
