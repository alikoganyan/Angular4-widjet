import {EventEmitter} from '@angular/core';
import {Client} from '../interfaces/client';
import {Specialist} from '../interfaces/specialist';

export class RecordInfoService {

  clientGet = new EventEmitter<Client>();
  getSubServices = new EventEmitter<any>();
  specialist = new EventEmitter<Specialist>();

}
