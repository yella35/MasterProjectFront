import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-navbar-item',
    templateUrl: './navbar-item.component.html',
    styleUrls: ['./navbar-item.component.css']
})
export class NavbarItemComponent implements OnInit {

    @Input() item;


    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    redirect(){
        this.router.navigate(['locations/' + this.item._id]);
    }

}
