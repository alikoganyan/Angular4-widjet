import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TownSelectionComponent } from './town-selection/town-selection.component';
import { SalonListComponent } from './salon-list/salon-list.component';
import { SelectSpecialistComponent } from './select-specialist/select-specialist.component';
import { RecordInfoComponent } from './record-info/record-info.component';
import { DateTimeComponent } from './date-time/date-time.component';

@NgModule({
  declarations: [
    AppComponent,
    TownSelectionComponent,
    SalonListComponent,
    SelectSpecialistComponent,
    RecordInfoComponent,
    DateTimeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
