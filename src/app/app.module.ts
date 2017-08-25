/* Widget models */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

/* Widget components */
import {AppComponent} from './app.component';
import {YourContactsComponent} from './your-contacts/your-contacts.component';
import {ServicesSelectionComponent} from './services-selection/services-selection.component';
import {ServicesComponent} from './services/services.component';
import {TownSelectionComponent} from './town-selection/town-selection.component';
import {SalonListComponent} from './salon-list/salon-list.component';
import {SelectSpecialistComponent} from './select-specialist/select-specialist.component';
import {RecordInfoComponent} from './record-info/record-info.component';
import {DateTimeComponent} from './date-time/date-time.component';

/* Widget services */
import {ClientService} from './widget-services/client.service';
import {SalonService} from './widget-services/salon.service';
import {CityService} from './widget-services/city.service';
import {ServiceSelectionService} from './widget-services/serviceSelection.service';

/* Widget directives */
import {AccordionServiceDirective} from './directives/accordion.service';


@NgModule({
  declarations: [
    AppComponent,
    YourContactsComponent,
    ServicesSelectionComponent,
    ServicesComponent,
    TownSelectionComponent,
    SalonListComponent,
    SelectSpecialistComponent,
    RecordInfoComponent,
    DateTimeComponent,
    AccordionServiceDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ClientService,
    SalonService,
    CityService,
    ServiceSelectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
