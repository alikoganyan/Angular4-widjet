import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CityService} from '../widget-services/city.service';
import {SalonService} from '../widget-services/salon.service';
import {City} from '../interfaces/city';
import {SubCity} from '../interfaces/sub-city';
import {Street} from '../interfaces/street';

@Component({
  selector: 'app-town-selection',
  templateUrl: './town-selection.component.html',
  styleUrls: ['./town-selection.component.css']
})
export class TownSelectionComponent implements OnInit {
  @Output() salon_list = new EventEmitter<string>();
  @Output() streetIdInSalons = new EventEmitter<number>();

  cities: City[] = [];
  cityId: number;

  subCities: SubCity[] = [];
  subCityId: number;

  streets: Street[] = [];
  streetId: number;

  constructor(private cityService: CityService, private salonService: SalonService) {
  }

  ngOnInit() {
    this.getCities();
  }


  /* CITY */
  getCities(): void {
    this.cityService.getCities()
      .then(cities => this.cities = cities);
  }

  /* SUB CITY */
  getSubCities(id: number): void {
    this.cityId = id;
    this.subCities = this.cityService.getSubCities(this.cityId);
    // .then(subCities => this.subCities = subCities);
  }

  /* STREET */
  getStreets(id: number) {
    this.subCityId = id;
    this.streets = this.cityService.getStreets(this.subCityId);
  }

  getStreetID(id: number) {
    this.streetId = id;
    this.streetIdInSalons.emit(id);
  }


  /* NAVIGATE */
  onPrevious(your_contacts: string): void {
    this.salon_list.emit(your_contacts);
  }

  onNext(salon_list: string): void {
    this.salon_list.emit(salon_list);
    this.salonService.getSalons(this.streetId);
    console.log(this.streetId);
  }

}
