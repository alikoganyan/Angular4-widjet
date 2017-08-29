import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {
  @Output() date_time = new EventEmitter<string>();

  constructor() {
  }


  ngOnInit() {
  }


  /* NAVIGATE */
  onPrevious(select_specialist: string) {
    this.date_time.emit(select_specialist);
  }

  onNext(record_info: string) {
    this.date_time.emit(record_info);
  }
}
