import { TextLimiterPipe } from './text-limiter.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TextLimiterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextLimiterPipe
  ]
})
export class TextLimiterModule { }
