import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  shouldDisplayMessage:boolean=false;
  messages=['message 1','message 2','message 3']

  constructor() { }

  ngOnInit() {
  }

  getColor(){
  return this.shouldDisplayMessage===false?'orange':'yellow';
  }

  onButtonClick(){
   this.shouldDisplayMessage=!this.shouldDisplayMessage;
  }
}
