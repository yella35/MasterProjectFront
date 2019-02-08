import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NavbarComponent} from './component/navigation/navbar/navbar.component';
import {HeaderComponent} from './component/navigation/header/header.component';
import {NavbarItemComponent} from './component/navigation/navbar/navbar-item/navbar-item.component';
import {LocationsSearchComponent} from './component/locations/locations-search/locations-search.component';
import {LocationItemComponent} from './component/locations/location-item/location-item.component';
import {BookingCalendarComponent} from './component/booking/booking-calendar/booking-calendar.component';
import {WelcomeComponent} from './component/welcome/welcome.component';
import {LocationDetailedComponent} from './component/locations/location-detailed/location-detailed.component';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgxGalleryModule } from 'ngx-gallery';
import { FooterComponent } from './component/navigation/footer/footer.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HeaderComponent,
        NavbarItemComponent,
        LocationsSearchComponent,
        LocationItemComponent,
        BookingCalendarComponent,
        WelcomeComponent,
        LocationDetailedComponent,
        FooterComponent
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule, MatButtonModule, MatCheckboxModule,
        NgxGalleryModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
