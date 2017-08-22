import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @Output() services = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onPreview(services_selection: string) {
    this.services.emit(services_selection);
}

  onNext(select_specialist: string) {
    this.services.emit(select_specialist);
  }
}
