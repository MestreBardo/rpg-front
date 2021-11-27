import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupCardComponent } from './group-card.component';
import { TextLimiterModule } from '../text-limiter/text-limiter.module';



@NgModule({
  declarations: [
    GroupCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TextLimiterModule,
  ],
  exports: [
    GroupCardComponent
  ]
})
export class GroupCardModule { }
