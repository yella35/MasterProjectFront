import {Component, Input, OnInit} from '@angular/core';
import {EquipementService} from '../../../service/location/equipement/equipement.service';


@Component({
    selector: 'app-equipement-item',
    templateUrl: './equipement-item.component.html',
    styleUrls: ['./equipement-item.component.css']
})
export class EquipementItemComponent implements OnInit {

    @Input() equipement;

    constructor() {
    }

    ngOnInit() {
//        this.equipementService.getEquipement(this.equipementID).subscribe(res => {
//            this.equipement = res['equipement'];
//            console.log(this.equipement);
//        })
    }

}
