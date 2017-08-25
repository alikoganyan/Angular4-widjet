import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServiceSelectionService} from '../widget-services/serviceSelection.service';
import {SubServiceSelection} from '../interfaces/sub-service-selection';
import {ServiceSelection} from '../interfaces/service-selection';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @Output() services = new EventEmitter<string>();
  @Input() service: ServiceSelection;
  subServices: SubServiceSelection[];
  isChecked = false;

  price = 0;

  constructor(private serviceSelectionService: ServiceSelectionService) {
  }

  ngOnInit() {
    this.getSubServices();
  }

  getSubServices() {
    this.subServices = this.serviceSelectionService.getSubServices(this.service.id);
    console.log(this.subServices);
  }

  selectedServices(hour: number, min: number, price: number) {
    this.isChecked = !this.isChecked;

    // if (this.isChecked) {
      this.price = this.price + price;
    // } else {
    //   this.price = this.price - price;
    // }
    console.log(this.price);
  }


  /* NAVIGATE */
  onPrevious(services_selection: string) {
    this.services.emit(services_selection);
  }

  onNext(select_specialist: string) {
    this.services.emit(select_specialist);
  }

}
