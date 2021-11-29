import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuModule } from './../shared/menu/menu.module';
import { CampaignRoutingModule } from './campaign-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignComponent } from './campaign.component';
import { EditCampaignComponent } from './edit-campaign/edit-campaign.component';
import { AddPlayersComponent } from './add-players/add-players.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { CampaignSessionsComponent } from './campaign-sessions/campaign-sessions.component';
import { CampaignPlayersComponent } from './campaign-players/campaign-players.component';
import { CampaignCharactersComponent } from './campaign-characters/campaign-characters.component';
import { CampaignTemplateComponent } from './campaign-template/campaign-template.component';
import { TemplateComponent } from './template/template.component';
import { RowConstructorComponent } from './template/row-constructor/row-constructor.component';
import { ColumnConstructorComponent } from './template/column-constructor/column-constructor.component';
import { TemplateRenderComponent } from './template/template-render/template-render.component';
import { SessionCardModule } from '../shared/session-card/session-card.module';




@NgModule({
  declarations: [
    CampaignComponent,
    EditCampaignComponent,
    AddPlayersComponent,
    AddSessionComponent,
    CampaignSessionsComponent,
    CampaignPlayersComponent,
    CampaignCharactersComponent,
    CampaignTemplateComponent,
    TemplateComponent,
    RowConstructorComponent,
    ColumnConstructorComponent,
    TemplateRenderComponent
  ],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    MenuModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    SessionCardModule
  ]
})
export class CampaignModule { }
