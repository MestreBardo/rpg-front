import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;

  constructor(
    private router: Router, private formBuilder: FormBuilder,
    private toaster: ToastrService, private authService: AuthService
  ) { }

  loginForms = this.formBuilder.group({
    login:['', [Validators.required, Validators.minLength(3)]],
    password:['', [Validators.required, Validators.minLength(6)]]
  });
  
  ngOnInit(): void {
    this.loading = false;
  }

  goToRegister(): void {
    this.loading = false;
    this.router.navigate(['/auth/register']);
  }

  login(): void {
    this.authService.login(this.loginForms.value).subscribe(
      (response) => {
        this.toaster.success('Login realizado com sucesso!', 'Sucesso!');
        this.router.navigate(['/home']);
      },
      (error) => {
        this.toaster.error(error.error.data, 'Erro!');
      }
    );
  }

}
