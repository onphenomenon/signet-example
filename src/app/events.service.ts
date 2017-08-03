import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import { find } from "lodash";

@Injectable()
export class EventsService {
  visitor = false; 
  data = {"customer_visits":
  [{"visit_id":772485,"customer_name":"Kaiser Permanente","customer_industry":"healthcare","visit_start":"2017-08-22T07:00:00+00:00","visit_end":"2017-08-22T18:00:00+00:00"},
  {"visit_id":924872,"customer_name":"University of Southern California","customer_industry":"education","visit_start":"2017-08-23T10:00:00+00:00","visit_end":"2017-08-23T14:00:00+00:00"},{"visit_id":247265,"customer_name":"VISA","customer_industry":"banking","visit_start":"2017-08-21T08:30:00+00:00","visit_end":"2017-08-21T12:30:00+00:00"},{"visit_id":847204,"customer_name":"Google","customer_industry":"tech","visit_start":"2017-08-21T12:30:00+00:00","visit_end":"2017-08-21T15:00:00+00:00"}],"visit_events":[{"visit_id":772485,"event":"Presentation from Jane Doe","show_on_agenda":true,"event_start":"2017-08-22T15:30:00+00:00","event_end":"2017-08-22T16:00:00+00:00"},{"visit_id":247265,"event":"Product Pitch","show_on_agenda":false,"event_start":"2017-08-21T10:00:00+00:00","event_end":"2017-08-21T10:30:00+00:00"},{"visit_id":847204,"event":"Round Table","show_on_agenda":true,"event_start":"2017-08-21T13:10:00+00:00","event_end":"2017-08-21T13:40:00+00:00"},{"visit_id":772485,"event":"Dinner Service","show_on_agenda":true,"event_start":"2017-08-22T16:45:00+00:00","event_end":"2017-08-22T17:45:00+00:00"},{"visit_id":847204,"event":"Meet & Greet","show_on_agenda":true,"event_start":"2017-08-21T12:45:00+00:00","event_end":"2017-08-21T13:00:00+00:00"},{"visit_id":772485,"event":"Lunch Service","show_on_agenda":true,"event_start":"2017-08-22T12:00:00+00:00","event_end":"2017-08-22T13:00:00+00:00"},{"visit_id":247265,"event":"Lunch Service","show_on_agenda":true,"event_start":"2017-08-21T11:30:00+00:00","event_end":"2017-08-21T12:00:00+00:00"},{"visit_id":772485,"event":"Coffee & Bagels","show_on_agenda":true,"event_start":"2017-08-22T07:30:00+00:00","event_end":"2017-08-22T08:00:00+00:00"},{"visit_id":247265,"event":"Presentation from Jane Doe","show_on_agenda":true,"event_start":"2017-08-21T08:45:00+00:00","event_end":"2017-08-21T09:15:00+00:00"},{"visit_id":772485,"event":"Product Pitch","show_on_agenda":false,"event_start":"2017-08-22T14:15:00+00:00","event_end":"2017-08-22T14:45:00+00:00"},{"visit_id":772485,"event":"Round Table","show_on_agenda":true,"event_start":"2017-08-22T16:00:00+00:00","event_end":"2017-08-22T16:30:00+00:00"},{"visit_id":772485,"event":"Breakout Sessions","show_on_agenda":false,"event_start":"2017-08-22T09:00:00+00:00","event_end":"2017-08-22T10:00:00+00:00"},{"visit_id":847204,"event":"Team Building","show_on_agenda":false,"event_start":"2017-08-21T14:00:00+00:00","event_end":"2017-08-21T14:30:00+00:00"}]}
  constructor() {
  }
  //push event at certain time 
  //check time every minute, push event at certain time 

  getVisitor(): Observable<any> {
    return Observable.timer(200, 20000)
      .map(this.checkForVisitor)
  }
  
  getEvents(): Observable<any> {
    return Observable.timer(0, 20000)
      .map(this.checkForEvents)
  }

  checkForVisitor = () => {
    var now = new Date().getTime();
    find(this.data.customer_visits, (visit) => {
      var startEvent = new Date(visit.visit_start).getTime();
      var endEvent = new Date(visit.visit_end).getTime();
      if(now >= startEvent && now <= endEvent) {
        return visit
      } else {
        return null;
      }
    }) 
  }

  checkForEvents = () => {
    return this.data.visit_events;
  }

}
