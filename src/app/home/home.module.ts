import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GroupCardModule } from './../shared/group-card/group-card.module';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MenuModule } from '../shared/menu/menu.module';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { MyCampaignsComponent } from './my-campaigns/my-campaigns.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { CampaignCardModule } from '../shared/campaign-card/campaign-card.module';



@NgModule({
  declarations: [
    HomeComponent,
    MyGroupsComponent,
    MyCampaignsComponent,
    CreateGroupComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MenuModule,
    GroupCardModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    CampaignCardModule
  ]
})
export class HomeModule { }
