import { TextLimiterModule } from './../text-limiter/text-limiter.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignCardComponent } from './campaign-card.component';



@NgModule({
  declarations: [
    CampaignCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TextLimiterModule
  ],
  exports: [
    CampaignCardComponent
  ]
})
export class CampaignCardModule { }
