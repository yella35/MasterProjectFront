import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

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
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EquipementItemComponent } from './component/locations/equipement-item/equipement-item.component';
import { AuthComponent } from './component/auth/auth.component';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';


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
        FooterComponent,
        EquipementItemComponent,
        AuthComponent

    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule, MatButtonModule, MatCheckboxModule,
        NgxGalleryModule,
        AngularFontAwesomeModule,
        MDBBootstrapModule.forRoot(),
        MatButtonModule,
        FormsModule,
        BrowserModule
    ],
    providers: [CookieService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
