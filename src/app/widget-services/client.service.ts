import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Client } from '../your-contacts/your-contacts.component';

@Injectable()
export class ClientService {

  constructor(private http: Http) { }

  create(client: Client): Observable<Client> {
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', 'Basic ZW1haWxAZG9tYWluLmNvbToxMjM0NTY=');

    return this.http.post('http://avisits.com:8080/api/clients', client, {headers: headers})
    .map(response => response.json().data as Client);
  }

}
