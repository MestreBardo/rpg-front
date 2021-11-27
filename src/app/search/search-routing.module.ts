import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
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
export class SearchingRoutingModule { }
