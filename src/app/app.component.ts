import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  state = true;

  constructor(){
  }

 ngOnInit() {
   setInterval(() => {
     this.state = !this.state
    }, 2500); 
 }

  // toggleView(){
    //wow interesting bug here
  //   console.log("Toggle view: ", this.state)
  //   this.state = !this.state;
  // }
}
