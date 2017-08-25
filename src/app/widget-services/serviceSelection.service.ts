import {Injectable} from '@angular/core';
import {SERVICE_SELECTION, SUB_SERVICE_SELECTION} from '../DataBase/cities/Db-city';
import {ServiceSelection} from '../interfaces/service-selection';
import {SubServiceSelection} from '../interfaces/sub-service-selection';

@Injectable()
export class ServiceSelectionService {
  constructor() {
  }

  getServices(id: number) {

    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', 'Basic ZW1haWxAZG9tYWluLmNvbToxMjM0NTY=');

    const services: ServiceSelection[] = [];

    for (let i = 0; i < SERVICE_SELECTION.length; ++i) {
      if (SERVICE_SELECTION[i].salon_id == id) {
        services.push(SERVICE_SELECTION[i]);
      }
    }
    // return this.http.get('http://avisits.com:8080/api/salons', {headers: headers})
    // .map(response => response.json().data);
    return services;
  }

  getSubServices(id: number) {

    const subServices: SubServiceSelection[] = [];

    for (let i = 0; i < SUB_SERVICE_SELECTION.length; ++i) {
      if (SUB_SERVICE_SELECTION[i].service_selection_id == id) {
        subServices.push(SUB_SERVICE_SELECTION[i]);
      }
    }

    return subServices;
  }


}
