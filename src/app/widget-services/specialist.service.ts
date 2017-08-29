import { Specialist } from '../interfaces/specialist';
import {SPECIALISTS} from '../DataBase/cities/Db-city';

export class SpecialistService {

  getSpecialists(id: number) {

    const specialists: Specialist[] = [];

    for (let i = 0; i < SPECIALISTS.length; i++) {
      if (SPECIALISTS[i].salon_id == id) {
        specialists.push(SPECIALISTS[i]);
      }
    }
    return specialists;
  }


}
