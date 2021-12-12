import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-campaign-template',
  templateUrl: './campaign-template.component.html',
  styleUrls: ['./campaign-template.component.sass']
})
export class CampaignTemplateComponent implements OnInit {
  @Input() campaignId: any;
  faPlus = faPlus;
  constructor(private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
  }

  gotoCampaign() {
    this.router.navigate(['/campaign/' + this.campaignId + '/template']);
  }

}
