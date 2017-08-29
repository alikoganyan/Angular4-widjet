import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecordInfoService} from '../widget-services/record-info.service';
import {RecordInfo} from '../interfaces/record-info';
import {Client} from '../interfaces/client';
import {Specialist} from '../interfaces/specialist';

@Component({
  selector: 'app-record-info',
  templateUrl: './record-info.component.html',
  styleUrls: ['./record-info.component.css']
})
export class RecordInfoComponent implements OnInit {
  @Output() record_info = new EventEmitter<string>();

  recordInfo: RecordInfo;

  constructor(private recordInfoService: RecordInfoService) {
  }

  ngOnInit() {
    this.recordInfoService.clientGet.subscribe(
      (client: Client) => {
        this.recordInfo.client = client;
      }
    );
    this.recordInfoService.getSubServices.subscribe(
      (subservices: any) => {
        this.recordInfo.services = subservices;
      }
    );
    this.recordInfoService.specialist.subscribe(
      (specialist: Specialist) => {
        this.recordInfo.specialist = specialist;
      }
    );
  }


  /* NAVIGATE */
  onPrevious(date_time: string) {
    this.record_info.emit(date_time);
  }

}
