import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-contacts',
  templateUrl: './your-contacts.component.html',
  styleUrls: ['./your-contacts.component.css']
})
export class YourContactsComponent implements OnInit {

  client: Client;

  constructor() { }

  ngOnInit() {
  }

}

interface Client {
  phone: string,
  name: string,
  email: string  
}
