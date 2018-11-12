import { Component} from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent{
    messageNumber:number=1234;
    messageText:string="This is the success alert message !";
    status:string="success";
    allowNewAddition:boolean=false;
    getMessageStatus(){
      return this.status;
    }
    constructor(){
      setTimeout(()=>{
        this.allowNewAddition=true
      },2000);
    }
}
