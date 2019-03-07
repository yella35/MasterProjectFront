import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LocationService} from '../../../service/location/location.service';
import * as moment from 'moment';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from 'ngx-gallery';
import {GlobalVariable} from '../../../../../globals';
import {EquipementService} from '../../../service/location/equipement/equipement.service';

@Component({
    selector: 'app-location-detailed',
    templateUrl: './location-detailed.component.html',
    styleUrls: ['./location-detailed.component.css']
})
export class LocationDetailedComponent implements OnInit {
    id: string;
    equipements;
    location;
    available = [];
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[] = [];

    constructor(private route: ActivatedRoute,
                private locationService: LocationService,
                private equipementService: EquipementService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        this.locationService.getLocation(this.id).subscribe(res => {
            this.location = res['location'];
            for (const disponibilite of this.location.disponibilites.prix) {
                this.available.push({mDate: moment(disponibilite.date), prix: disponibilite.montant});
            }
            for (const image of this.location.images) {
                this.galleryImages.push(
                    {
                        small: `${GlobalVariable.BASE_URL}/images/${image.small}`,
                        medium: `${GlobalVariable.BASE_URL}/images/${image.medium}`,
                        big: `${GlobalVariable.BASE_URL}/images/${image.big}`
                    });
            }
            for (const disponibilite of this.location.disponibilites.prix) {
                this.available.push({mDate: moment(disponibilite.date), prix: disponibilite.montant});
            }
            for (const equipement of this.location.equipements) {
                this.equipementService.getEquipement(equipement).subscribe(response => {
                    this.equipements = response['equipements'];
                });
            }
        });
        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
    }
}

