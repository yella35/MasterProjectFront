import {Component, Input, OnInit} from '@angular/core';
import { GlobalVariable } from 'globals';


@Component({
  selector: 'app-location-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.css']

})
export class LocationItemComponent implements OnInit {
    @Input() location
    poster;
  constructor() { }

  ngOnInit() {
      this.poster = `${GlobalVariable.BASE_URL}/locations/${this.location._id}/thumb`;
  }

  minPrice(){
      let min = this.location.disponibilites.prix.map(function(el){return el.montant}).reduce(function(el){return Math.min(el)});
      return min;
  }


}
