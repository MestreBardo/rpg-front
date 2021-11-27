import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GroupCardModule } from './../shared/group-card/group-card.module';
import { MenuModule } from './../shared/menu/menu.module';
import { SearchingRoutingModule } from './search-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchingRoutingModule,
    MenuModule,
    GroupCardModule,
    FontAwesomeModule
  ]
})
export class SearchModule { }
