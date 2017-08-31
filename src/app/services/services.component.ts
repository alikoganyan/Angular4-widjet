import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServiceSelectionService} from '../widget-services/serviceSelection.service';
import {SubServiceSelection} from '../interfaces/sub-service-selection';
import {ServiceSelection} from '../interfaces/service-selection';
import {RecordInfoService} from '../widget-services/record-info.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @Output() services = new EventEmitter<string>();
  @Input() service: ServiceSelection;
  subServices: SubServiceSelection[];
  selectedServices: SubServiceSelection[] = [];

  price = 0;
  hour = 0;
  min = 0;
  time = 0;
  count = 0;

  constructor(private serviceSelectionService: ServiceSelectionService,
              private recordInfoService: RecordInfoService) {
  }

  ngOnInit() {
    this.getSubServices();
  }

  getSubServices() {
    this.subServices = this.serviceSelectionService.getSubServices(this.service.id);
    // this.subServices = this.serviceSelectionService.getSubServices(1);
  }

  onSelectedServices(event, subService: SubServiceSelection) {

    if (event.target.checked) {
      this.count++;
      this.price = this.price + subService.price;
      this.time = this.time + (subService.hour * 60) + subService.min;
      this.selectedServices.push(subService);
    } else {
      this.count--;
      this.price = this.price - subService.price;
      this.time = this.time - (subService.hour * 60) - subService.min;


      const position = this.selectedServices.findIndex(
        (sb: SubServiceSelection) => {
          return sb.id === subService.id;
        });
      this.selectedServices.splice(position, 1);
    }

    this.hour = Math.floor(this.time / 60);
    this.min = ((this.time / 60) - this.hour) * 60;
    console.log(this.selectedServices);
  }


  /* NAVIGATE */
  onPrevious(services_selection: string) {
    this.services.emit(services_selection);
  }

  onNext(select_specialist: string) {
    this.services.emit(select_specialist);
    this.recordInfoService.getServices(this.selectedServices);
  }

}
