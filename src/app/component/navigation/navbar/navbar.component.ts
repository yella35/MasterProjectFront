import {Component, OnInit} from '@angular/core';
import {LocationtypeService} from '../../../service/location/locationtype.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    items = [];

    constructor(private locationtype: LocationtypeService,
                private router: Router) {
    }

    ngOnInit() {

        this.locationtype.getTypes().subscribe(res => {
            for (let types of res['locationtypes']) {
                this.items.push(types);
            }
        });
    }

    redirect(item){
        this.router.navigate(['locations/' + item._id]);
    }

    login(){
        this.router.navigate(['login/']);
    }

}
