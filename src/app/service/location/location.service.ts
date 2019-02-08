import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
    providedIn: 'root'
})
export class LocationService {
    BASE_URL = 'http://localhost:3000/locations/';
    limit = 9;


    constructor(private http: HttpClient) {
    }

    getLocations(id: string,  start: number = 0){
        let url = `${this.BASE_URL + id}?start=${start}`;
            url += `&limit=${this.limit}`;
        return this.http.get(url);
    }

    getLocation(id: string){
        let url = `${this.BASE_URL}detail/${id}`;
        return this.http.get(url);
    }
}
