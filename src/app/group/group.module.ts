import { CampaignCardModule } from './../shared/campaign-card/campaign-card.module';
import { MemberCardModule } from './../shared/member-card/member-card.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GroupRoutingModule } from './group-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group.component';
import { MenuModule } from '../shared/menu/menu.module';
import { GroupCampaignsComponent } from './group-campaigns/group-campaigns.component';
import { GroupMembersComponent } from './group-members/group-members.component';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCampaignComponent } from './create-campaign/create-campaign.component';



@NgModule({
  declarations: [
    GroupComponent,
    GroupCampaignsComponent,
    GroupMembersComponent,
    EditGroupComponent,
    CreateCampaignComponent
  ],
  imports: [
    CommonModule,
    GroupRoutingModule,
    MenuModule,
    FontAwesomeModule,
    MemberCardModule,
    ReactiveFormsModule,
    FormsModule,
    CampaignCardModule
  ]
})
export class GroupModule { }
