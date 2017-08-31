import {Client} from '../interfaces/client';
import {Specialist} from '../interfaces/specialist';
import {SubServiceSelection} from '../interfaces/sub-service-selection';


export class RecordInfoService {


  client: Client;
  specialist: Specialist;
  services: SubServiceSelection[];


  getSpecialist(specialist: Specialist) {
    this.specialist = specialist;
  }

  getClient(client: Client) {
    this.client = client;
  }

  getServices(services: SubServiceSelection[]) {
    this.services = services;
  }
}
