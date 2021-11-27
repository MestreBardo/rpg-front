import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.sass']
})
export class EditUserComponent implements OnInit {

  @Output() finishEditingUser = new EventEmitter<any>();
  faTimes = faTimes;
  lookingFor: string = 'username';
  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private authService: AuthService, private toaster: ToastrService) { }

  editUserUsernameForms = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    confirmationPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]]
  });

  editUserEmailForms = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    confirmationPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]]
  });

  editUserPasswordForms = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
    confirmationPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]]
  });

  editUserInfoForms = this.formBuilder.group({
    name: ['', [Validators.minLength(3), Validators.maxLength(30)]],
    surname: ['', [Validators.minLength(3), Validators.maxLength(30)]],
    birthday: [''],
    city: ['', [Validators.minLength(3), Validators.maxLength(30)]],
    gender: ['', [Validators.minLength(3), Validators.maxLength(30)]],
    confirmationPassword: ['', [Validators.minLength(6), Validators.maxLength(30)]]
  });



  ngOnInit(): void {
    this.usersService.getMe().subscribe(
      (response: any) => {
        this.editUserUsernameForms.controls.username.setValue(response.data.username);
        this.editUserEmailForms.controls.email.setValue(response.data.email);
        this.editUserInfoForms.controls.name.setValue(response.data.name);
        this.editUserInfoForms.controls.surname.setValue(response.data.surname);
        this.editUserInfoForms.controls.birthday.setValue(response.data.birthday);
        this.editUserInfoForms.controls.city.setValue(response.data.city);
        this.editUserInfoForms.controls.gender.setValue(response.data.gender)
      }
    );
  }

  goTo(param: string){
    this.lookingFor = param;
  }


  editUserUsername(){ 
    this.usersService.editUserUsername(this.editUserUsernameForms.value).subscribe(
      (response: any) => {
        this.toaster.success('Usuário alterado com sucesso!');
      }
    ),
    (error: any) => {
      this.toaster.error(error.error.data);
    }
  }

  editUserPassword(){
    this.usersService.editUserPassword(this.editUserPasswordForms.value).subscribe(
      (response: any) => {
        this.toaster.success('Usuário alterado com sucesso!');
      }
    ),
    (error: any) => {
      this.toaster.error(error.error.data);
    }
  }

  editUserEmail(){
    this.usersService.editUserEmail(this.editUserEmailForms.value).subscribe(
      (response: any) => {
        this.toaster.success('Usuário alterado com sucesso!');
      }
    ),
    (error: any) => {
      this.toaster.error(error.error.data);
    }
  }

  editUserInfo(){
    this.usersService.editUserInfo(this.editUserInfoForms.value).subscribe(
      (response: any) => {
        this.toaster.success('Usuário alterado com sucesso!');
      }
    ),
    (error: any) => {
      this.toaster.error(error.error.data);
    }
  }

}
