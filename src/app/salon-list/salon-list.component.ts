import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SalonService} from '../widget-services/salon.service';
import {Salon} from '../interfaces/salon';
import {ServiceSelectionService} from '../widget-services/serviceSelection.service';

@Component({
  selector: 'app-salon-list',
  templateUrl: './salon-list.component.html',
  styleUrls: ['./salon-list.component.css']
})
export class SalonListComponent implements OnInit {
  @Output() services_selection = new EventEmitter<string>();
  @Input() streetId: number;
  @Output() onSelectedSalon = new EventEmitter<Salon>();
  salons: Salon[] = [];
  selectedSalon: Salon;

  lat = 55.73;
  lng = 37.53;
  zoom = 11;

  constructor(private salonService: SalonService, private serviceSelectionService: ServiceSelectionService) {
  }

  ngOnInit() {
    this.getSalons();
  }

  onSalonSelect(salon: Salon) {
    this.selectedSalon = salon;
    this.onSelectedSalon.emit(salon);
  }


  getSalons() {
    this.salons = this.salonService.getSalons(this.streetId);
    // this.salons = this.salonService.getSalons(1);
  }


  /* GOOGLE MAP */
  markers: any = [
    {
      lat: 55.732,
      lng: 37.552
    },
    {
      lat: 55.734,
      lng: 37.556
    },
    {
      lat: 55.736,
      lng: 37.59
    }
  ];

  /* NAVIGATE */
  onPrevious(town_selection: string) {
    this.services_selection.emit(town_selection);
  }

  onNext(services_selection: string) {
    this.services_selection.emit(services_selection);
    this.serviceSelectionService.getServices(this.selectedSalon.id);
    console.log(this.selectedSalon.id);
  }

}
