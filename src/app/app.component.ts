import {Component} from '@angular/core';
import {Salon} from './interfaces/salon';
import {ServiceSelection} from './interfaces/service-selection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status = 'town_selection';
  streetIdInSalon: number;
  selectedSalon: Salon;
  selectedService: ServiceSelection;


  town_selection(town_selection: string) {
    this.status = town_selection;
  }

  salon_list(salon_list: string) {
    this.status = salon_list;
  }

  services_selection(services_selection: string) {
    this.status = services_selection;
  }

  services(services: string) {
    this.status = services;
  }

  select_specialist(select_specialist: string) {
    this.status = select_specialist;
  }

  date_time(date_time: string) {
    this.status = date_time;
  }

  record_info(record_info: string) {
    this.status = record_info;
  }


  getStreetId(id: number) {
    this.streetIdInSalon = id;
  }

  onSelectedSalon(salon: Salon) {
    this.selectedSalon = salon;
  }

  onSelectedService(service) {
    this.selectedService = service;
  }

}
