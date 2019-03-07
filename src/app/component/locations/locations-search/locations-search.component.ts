import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LocationService} from '../../../service/location/location.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-locations-search',
    templateUrl: './locations-search.component.html',
    styleUrls: ['./locations-search.component.css']
})
export class LocationsSearchComponent implements OnInit{

    idType: string;
    locations
    start = 0;

    constructor(private route: ActivatedRoute,
                private locationService: LocationService,
                private router : Router) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.idType = params['id'];
            this.locationService.getLocations(this.idType, this.start).subscribe(res => {
                this.locations = res['locations'];
            });
        });

    }


    redirect(id){
        this.router.navigate(['location/' + id]);
    }

}
