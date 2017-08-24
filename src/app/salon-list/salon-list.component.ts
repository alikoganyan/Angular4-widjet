import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-salon-list',
  templateUrl: './salon-list.component.html',
  styleUrls: ['./salon-list.component.css']
})
export class SalonListComponent implements OnInit {
  @Output() services_selection = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onPrevious(town_selection: string) {
    this.services_selection.emit(town_selection);
  }

  onNext(services_selection: string) {
    this.services_selection.emit(services_selection);
  }

}
