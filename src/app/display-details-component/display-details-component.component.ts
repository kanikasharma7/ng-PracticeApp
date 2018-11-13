import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details-component',
  templateUrl: './display-details-component.component.html',
  styleUrls: ['./display-details-component.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  displayDetails:boolean=false;
  buttonText:string="Display Details";
  counter:number=0;
  logs=[];
 
  constructor() { }

  toggleDetails(){
  this.displayDetails=!this.displayDetails;
  this.buttonText=this.displayDetails===true?"Hide Details":"Display Details";
  this.logs.push({counter:++this.counter,date:new Date()});
  }

  ngOnInit() {
  }

}
