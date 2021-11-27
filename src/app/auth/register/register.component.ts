import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  loading: boolean = false;

  constructor(
    private router: Router, private formBuilder: FormBuilder,
    private toaster: ToastrService, private authService: AuthService
  ) { }
  
  registerForms = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    surname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmationPassword: ['', [Validators.required, Validators.minLength(6)]],
    gender: ['', Validators.required],
    birthday: ['', [Validators.required]],
    country: ['Brasil', Validators.required],
    city: ['', Validators.required]
  });

  ngOnInit(): void {
    this.loading = false;
  }

  goToLogin() {
    this.loading = false;
    this.router.navigate(['auth/login']);
  }

  register() {
    this.authService.register(this.registerForms.value).subscribe(
      (response) => {
        this.toaster.success('Registro realizado com sucesso!', 'Sucesso!');
        this.router.navigate(['/home']);
      },
      (error) => {
        this.toaster.error('Error ao realizar o registro favor corrigir os dados', 'Erro!');
      }
    );
  }

}
