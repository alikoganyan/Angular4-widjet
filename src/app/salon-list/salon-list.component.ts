import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { SalonService } from '../widget-services/salon.service';

@Component({
  selector: 'app-salon-list',
  templateUrl: './salon-list.component.html',
  styleUrls: ['./salon-list.component.css']
})
export class SalonListComponent implements OnInit {
  @Output() services_selection = new EventEmitter<string>();
  salons = [];
  selectedSalon;

  constructor(private salonService: SalonService) {
  }

  ngOnInit() {
    // To be changes in future to get salons from service
    this.salons = this.salonService.getSalons();
  }

  onPrevious(town_selection: string) {
    this.services_selection.emit(town_selection);
  }

  onNext(services_selection: string) {
    this.services_selection.emit(services_selection);
  }

  onSalonSelect(salon) {
    this.selectedSalon = salon;
  }

}
