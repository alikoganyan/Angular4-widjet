import {City} from '../interfaces/city';
import {CITIES, STREETS, SUB_CITIES} from '../DataBase/cities/Db-city';
import {Injectable} from '@angular/core';
import {SubCity} from '../interfaces/sub-city';
import {Street} from '../interfaces/street';


@Injectable()
export class CityService {
  getCities(): Promise<City[]> {
    return Promise.resolve(CITIES);
  }

  getSubCities(id: number): SubCity[] {
    // const promise = new Promise(() => {
    //
    // });
    // return Promise.resolve(promise);

    const cities: SubCity[] = [];

    for (let i = 0; i < SUB_CITIES.length; i++) {
      if (SUB_CITIES[i].city_id == id) {
        cities.push(SUB_CITIES[i]);
      }
    }
    return cities;
  }


  getStreets(id: number): Street[] {
    const streets: Street[] = [];

    for (let i = 0; i < STREETS.length; i++) {
      if (STREETS[i].sub_city_id == id) {
        streets.push(STREETS[i]);
      }
    }
    return streets;
  }

}
