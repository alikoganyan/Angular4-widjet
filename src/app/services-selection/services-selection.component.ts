import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-services-selection',
  templateUrl: './services-selection.component.html',
  styleUrls: ['./services-selection.component.css']
})
export class ServicesSelectionComponent implements OnInit {
  @Output() services_selection = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onPreview(services_selection: string) {
    this.services_selection.emit(services_selection);
  }

  onNext(services: string) {
    this.services_selection.emit(services);
  }
}
