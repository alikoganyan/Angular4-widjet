import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YourContactsComponent } from './your-contacts/your-contacts.component';
import { ServicesSelectionComponent } from './services-selection/services-selection.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    YourContactsComponent,
    ServicesSelectionComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
