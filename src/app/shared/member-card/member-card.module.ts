import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberCardComponent } from './member-card.component';



@NgModule({
  declarations: [
    MemberCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    MemberCardComponent
  ]
})
export class MemberCardModule { }
