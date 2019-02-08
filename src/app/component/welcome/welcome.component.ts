import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }
    available = [{
        mDate: moment(),
        available: true,
        prix :60
    }]

  ngOnInit() {
    let date = new Date()
      date.setDate(1)

      this.available.push({mDate:moment(date),
      available:true,
      prix: 100 })
  }

    select(event){
    console.log(event)
    }

}
