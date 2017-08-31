import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SpecialistService} from '../widget-services/specialist.service';
import {Specialist} from '../interfaces/specialist';
import {Salon} from '../interfaces/salon';
import {RecordInfoService} from '../widget-services/record-info.service';

@Component({
  selector: 'app-select-specialist',
  templateUrl: './select-specialist.component.html',
  styleUrls: ['./select-specialist.component.css']
})
export class SelectSpecialistComponent implements OnInit {
  @Output() select_specialist = new EventEmitter<string>();
  @Input() salon: Salon;
  specialists: Specialist[];
  selectedSpecialist: Specialist;

  constructor(private specialistService: SpecialistService,
              private recordInfoService: RecordInfoService) {
  }

  ngOnInit() {
    this.getSpecialists();
  }

  getSpecialists() {
    this.specialists = this.specialistService.getSpecialists(this.salon.id);
    // this.specialists = this.specialistService.getSpecialists(1);
  }

  selectSpecialist(specialist) {
    this.selectedSpecialist = specialist;
    console.log(specialist);
   this.recordInfoService.getSpecialist(specialist);
  }


  /* NAVIGATE */
  onPrevious(services: string) {
    this.select_specialist.emit(services);
  }

  onNext(date_time) {
    this.select_specialist.emit(date_time);
  }

}
