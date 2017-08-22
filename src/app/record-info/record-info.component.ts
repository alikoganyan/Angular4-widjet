import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-record-info',
  templateUrl: './record-info.component.html',
  styleUrls: ['./record-info.component.css']
})
export class RecordInfoComponent implements OnInit {
  @Output() record_info = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onPreview(date_time: string) {
    this.record_info.emit(date_time);
}

}
