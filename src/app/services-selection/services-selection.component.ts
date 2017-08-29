import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServiceSelectionService} from '../widget-services/serviceSelection.service';
import {ServiceSelection} from '../interfaces/service-selection';
import {Salon} from '../interfaces/salon';


@Component({
  selector: 'app-services-selection',
  templateUrl: './services-selection.component.html',
  styleUrls: ['./services-selection.component.css']
})
export class ServicesSelectionComponent implements OnInit {
  @Output() services_selection = new EventEmitter<string>();
  @Input() salon: Salon;
  services: ServiceSelection[] = [];
  selectedService: ServiceSelection;
  @Output() onSelectedService = new EventEmitter<ServiceSelection>();

  constructor(private serviceSelectionService: ServiceSelectionService) {
  }

  ngOnInit() {
    this.getServices();
  }

  getServices() {
    // this.services = this.serviceSelectionService.getServices(this.salon.id);
    this.services = this.serviceSelectionService.getServices(1);
  }

  onServiceSelect(service: ServiceSelection) {
    this.selectedService = service;
    this.onSelectedService.emit(service);
    console.log(service);
  }

  /* NAVIGATE */
  onPrevious(services_selection: string) {
    this.services_selection.emit(services_selection);
  }

  onNext(services: string) {
    this.services_selection.emit(services);
    console.log(this.selectedService.id);
  }
}
