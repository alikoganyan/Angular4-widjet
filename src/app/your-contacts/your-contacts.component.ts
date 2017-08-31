import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';

import {RecordInfoService} from '../widget-services/record-info.service';
import {ClientService} from '../widget-services/client.service';
import {Client} from '../interfaces/client';


@Component({
  selector: 'app-your-contacts',
  templateUrl: './your-contacts.component.html',
  styleUrls: ['./your-contacts.component.css']
})
export class YourContactsComponent implements OnInit {
  @Output() town_selection = new EventEmitter<string>();
  client: Client;


  constructor(private clientService: ClientService,
              private recordInfoService: RecordInfoService) {
    this.client = new Client();
  }



  onSignup(form: NgForm, town_selection: string) {
    this.town_selection.emit(town_selection);
    this.client.email = form.value.email;
    this.client.name = form.value.name;
    this.client.phone = form.value.phone;
    this.recordInfoService.getClient(this.client);
  }

  ngOnInit() {
  }

  // onNext(town_selection: string) {
  //   this.town_selection.emit(town_selection);
  //   // this.clientService.create(this.client).subscribe((savedClient) => {
  //   //   console.log(savedClient);
  //   // }, (error) => {
  //   //   console.error(error);
  //   // });
  // }

}

