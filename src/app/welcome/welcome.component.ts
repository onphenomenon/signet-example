import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title =  "to the Executive Briefing Center";
  default = "to the Executive Briefing Center";
  currentEvent: null; 
  constructor(private eventsService: EventsService) {
    console.log("THIS TITLE: ", this.title)
   }

  ngOnInit() {
    this.eventsService.getVisitor().subscribe((event) => {
      console.log("EVENT: ", event)
      if(event) {
        this.title = event.customer_name;
      } else {
        console.log("Default: title")
        this.title = this.default;
      }
    })
  }

}
