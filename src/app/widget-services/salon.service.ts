import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {SALONS} from '../DataBase/cities/Db-city';
import {Salon} from '../interfaces/salon';

@Injectable()
export class SalonService {


  constructor(private http: Http) {
  }


  getSalons(id: number) {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', 'Basic ZW1haWxAZG9tYWluLmNvbToxMjM0NTY=');

    const salons: Salon[] = [];

    for (let i = 0; i < SALONS.length; ++i) {
      if (SALONS[i].sub_city_id == id) {
        salons.push(SALONS[i]);
      }
    }
    // return this.http.get('http://avisits.com:8080/api/salons', {headers: headers})
    // .map(response => response.json().data);
    return salons;
  }

}
