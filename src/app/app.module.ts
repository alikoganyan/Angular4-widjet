import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TownSelectionComponent } from './town-selection/town-selection.component';
import { SalonListComponent } from './salon-list/salon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TownSelectionComponent,
    SalonListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
