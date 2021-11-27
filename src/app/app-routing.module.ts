import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('src/app/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'group',
    loadChildren: () => import('src/app/group/group.module').then(m => m.GroupModule)
  },
  {
    path: 'campaign',
    loadChildren: () => import('src/app/campaign/campaign.module').then(m => m.CampaignModule)
  },
  {
    path: 'user',
    loadChildren: () => import('src/app/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'search',
    loadChildren: () => import('src/app/search/search.module').then(m => m.SearchModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
