import { PlayerCardModule } from './../shared/player-card/player-card.module';
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
import { InputRenderComponent } from './template/input-render/input-render.component';
import { TextRenderComponent } from './template/text-render/text-render.component';
import { ListRenderComponent } from './template/list-render/list-render.component';
import { InputComponent } from './template/list-render/input/input.component';
import { SessionCardModule } from '../shared/session-card/session-card.module';
import { AddPlayerComponent } from './add-player/add-player.component';
import { CharacterComponent } from './character/character.component';
import { CharacterRenderComponent } from './character/character-render/character-render.component';
import { InputCharacterRenderComponent } from './character/input-character-render/input-character-render.component';
import { TextCharacterRenderComponent } from './character/text-character-render/text-character-render.component';
import { ListCharacterRenderComponent } from './character/list-character-render/list-character-render.component';




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
    TemplateRenderComponent,
    InputRenderComponent,
    TextRenderComponent,
    ListRenderComponent,
    InputComponent,
    AddPlayerComponent,
    CharacterComponent,
    CharacterRenderComponent,
    InputCharacterRenderComponent,
    TextCharacterRenderComponent,
    ListCharacterRenderComponent
  ],
  imports: [
    CommonModule,
    CampaignRoutingModule,
    MenuModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    SessionCardModule,
    PlayerCardModule
  ]
})
export class CampaignModule { }
