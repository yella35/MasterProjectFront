import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LocationsSearchComponent} from './component/locations/locations-search/locations-search.component';
import {LocationDetailedComponent} from './component/locations/location-detailed/location-detailed.component';
import {WelcomeComponent} from './component/welcome/welcome.component';

const routes: Routes = [{path: '', redirectTo: '/welcome', pathMatch: 'full'},
    {path: 'welcome', component: WelcomeComponent},
    {path: 'locations/:id', component : LocationsSearchComponent },
    {path: 'location/:id', component : LocationDetailedComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
