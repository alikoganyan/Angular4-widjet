import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-your-contacts',
  templateUrl: './your-contacts.component.html',
  styleUrls: ['./your-contacts.component.css']
})
export class YourContactsComponent implements OnInit {
  @Output() town_selection = new EventEmitter<string>();
  client: Client;

  constructor() { }

  ngOnInit() {
  }

  onNext(town_selection: string) {
    this.town_selection.emit(town_selection);
  }

}

interface Client {
  phone: string,
  name: string,
  email: string  
}
