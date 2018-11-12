import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponent implements OnInit {
  username:string="";
  isResetButtonDisabled:boolean=true;

  validateUsernameToEnableButton(event:any){
   this.isResetButtonDisabled=(event.target.value==""||event.target.value.trim()=="");
  }

  resetUsername(){
    this.username="";
    this.isResetButtonDisabled=true;
  }

  constructor() { }

  ngOnInit() {
  }
}
