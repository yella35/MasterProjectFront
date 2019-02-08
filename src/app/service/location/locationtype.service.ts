import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class LocationtypeService {


    BASE_URL = 'http://localhost:3000/locationtypes';


    constructor(private http: HttpClient) {
    }

    getTypes(){
        let url = `${this.BASE_URL}`;
        return this.http.get(url);
    }
}
