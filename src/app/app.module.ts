import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './component/navigation/navbar/navbar.component';
import {HeaderComponent} from './component/navigation/header/header.component';
import { NavbarItemComponent } from './component/navigation/navbar/navbar-item/navbar-item.component';
import { LocationsSearchComponent } from './component/locations/locations-search/locations-search.component';
import { LocationItemComponent } from './component/locations/location-item/location-item.component';



@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HeaderComponent,
        NavbarItemComponent,
        LocationsSearchComponent,
        LocationItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
