import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { ClientService } from '../widget-services/client.service';

@Component({
  selector: 'app-your-contacts',
  templateUrl: './your-contacts.component.html',
  styleUrls: ['./your-contacts.component.css']
})
export class YourContactsComponent implements OnInit {
  @Output() town_selection = new EventEmitter<string>();
  client: Client = {
    id: null,
    phone: '',
    name: '',
    email: ''
  };

  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }

  onNext(town_selection: string) {
    this.clientService.create(this.client).subscribe((savedClient)=>{
      console.log(savedClient);
      this.town_selection.emit(town_selection);
    }, (error)=>{
      console.error(error);
    });

  }

}

export interface Client {
  id: number,
  phone: string,
  name: string,
  email: string  
}
