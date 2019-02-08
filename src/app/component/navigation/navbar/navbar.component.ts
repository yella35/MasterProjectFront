import {Component, OnInit} from '@angular/core';
import {LocationtypeService} from '../../../service/location/locationtype.service';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    items = [];

    constructor(private locationtype: LocationtypeService) {
    }

    ngOnInit() {

        this.locationtype.getTypes().subscribe(res => {
            console.log(res);
            for (let types of res.locationtypes) {
                this.items.push(types);
            }
        });
    }

}
