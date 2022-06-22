import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Modules/material/material.module';
import { TimerComponent } from './timer/timer/timer.component';
import { CreateTimerComponent } from './timer/create-timer/create-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    CreateTimerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
