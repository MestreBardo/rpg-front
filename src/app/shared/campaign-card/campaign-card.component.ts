import { Router } from '@angular/router';
import { faJournalWhills, faUnlockAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-card',
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.sass']
})
export class CampaignCardComponent implements OnInit {

  @Input() campaign: any = {name: "Default Name", description: "Default Description", isPublic: true};
  @Input() userSignedRole: string = "";
  faUnlockAlt = faUnlockAlt;
  faUsers = faUsers;
  faJournalWhills = faJournalWhills;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCampaign() {
    
    const id = this.campaign["_id"] || this.campaign.id
    this.router.navigate(['/campaign', id]);
  }

}
