import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsService } from './events.service';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
