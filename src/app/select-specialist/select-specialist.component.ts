import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select-specialist',
  templateUrl: './select-specialist.component.html',
  styleUrls: ['./select-specialist.component.css']
})
export class SelectSpecialistComponent implements OnInit {
  @Output() select_specialist = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onPrevious(services: string) {
    this.select_specialist.emit(services);
  }

  onNext(date_time) {
    this.select_specialist.emit(date_time);
  }

}
