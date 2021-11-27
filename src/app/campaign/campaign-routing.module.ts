import { CampaignComponent } from './campaign.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {
    path: ':id',
    component: CampaignComponent,
  },
  {
    path: ':id/template',
    component: TemplateComponent,
  },
  {
    path: '**',
    redirectTo: '',  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
