import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { filter, sortBy, chain } from "lodash";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  events = []
  eventsToday = []; 
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getEvents().subscribe((allEvents) => {
      this.events = allEvents; 
      let today = new Date();
      today.setHours(0,0,0,0)
      let tomorrow = new Date();
      tomorrow.setTime( tomorrow.getTime() + 1 * 86400000)
      //populate events today with dates of today:
      // let wrapper = chain(this.events).filter((event) => {
      //   let eventStart = event.event_start.getTime();
      //   return (eventStart >= today && eventStart <= tomorrow)
      // }).sortBy('event_start');
      let eventsToday = chain(this.events).sortBy((event) => {
        return new Date(event.event_start).getTime();
      }).value();
      console.log("WRAPPER: ", eventsToday)
      // this.eventsToday = sortBy(this.eventsToday, (event) => {
      //   return event.event_start; 
      // })

    })

  }

}

// var youngest = _
//   .chain(users)
//   .sortBy('age')
//   .map(function(o) {
//     return o.user + ' is ' + o.age;
//   })
