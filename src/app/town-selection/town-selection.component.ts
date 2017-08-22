import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-town-selection',
  templateUrl: './town-selection.component.html',
  styleUrls: ['./town-selection.component.css']
})
export class TownSelectionComponent implements OnInit {
  @Output() salon_list = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onPreview(your_contacts: string) {
    this.salon_list.emit(your_contacts);
  }

  onNext(salon_list: string) {
    this.salon_list.emit(salon_list);
  }
}
