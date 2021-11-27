import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
  },
  {
    path: ':form',
    component: AuthComponent,
  },
  {
    path: '**',
    redirectTo: 'login',  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
