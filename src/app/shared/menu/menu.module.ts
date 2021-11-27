import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditUserModule } from './../edit-user/edit-user.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    EditUserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
