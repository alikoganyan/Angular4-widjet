import {SubServiceSelection} from './sub-service-selection';
import {Specialist} from './specialist';
import {Client} from './client';

export class RecordInfo {
  services: SubServiceSelection[];
  specialist: Specialist;
  client: Client;
}
