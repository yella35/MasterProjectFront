import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {

  constructor( private http : HttpClient) { }

    BASE_URL = 'http://localhost:3000/equipements/';


    getEquipement(id: string){
        let url = `${this.BASE_URL + id}`;
        return this.http.get(url);
    }

}
