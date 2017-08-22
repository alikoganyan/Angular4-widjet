import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';

/* Widget components */
import { YourContactsComponent } from './your-contacts/your-contacts.component';
import { ServicesSelectionComponent } from './services-selection/services-selection.component';
import { ServicesComponent } from './services/services.component';
import { TownSelectionComponent } from './town-selection/town-selection.component';
import { SalonListComponent } from './salon-list/salon-list.component';
import { SelectSpecialistComponent } from './select-specialist/select-specialist.component';
import { RecordInfoComponent } from './record-info/record-info.component';
import { DateTimeComponent } from './date-time/date-time.component';

/* Widget sevices */
import { ClientService } from './widget-services/client.service';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
