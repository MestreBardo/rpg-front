import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SessionCardComponent } from './session-card.component';



@NgModule({
  declarations: [
    SessionCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    SessionCardComponent
  ]
})
export class SessionCardModule { }
