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

  constructor(private salonService: SalonService, private serviceSelectionService: ServiceSelectionService) {
  }

  ngOnInit() {
    // To be changes in future to get salons from service
    this.getSalons();
  }

  onSalonSelect(salon: Salon) {
    this.selectedSalon = salon;
    this.onSelectedSalon.emit(salon);
    console.log(salon);
  }


  getSalons() {
    this.salons = this.salonService.getSalons(this.streetId);
  }


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
