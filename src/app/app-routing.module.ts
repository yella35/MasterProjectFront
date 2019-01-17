import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LocationsSearchComponent} from './component/locations/locations-search/locations-search.component';

const routes: Routes = [{path: 'locations/:id', component : LocationsSearchComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
