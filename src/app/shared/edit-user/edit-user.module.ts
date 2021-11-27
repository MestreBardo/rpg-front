import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserComponent } from './edit-user.component';



@NgModule({
  declarations: [
    EditUserComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    EditUserComponent
  ]
})
export class EditUserModule { }
