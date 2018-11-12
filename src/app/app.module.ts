import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {WarningAlertComponent} from './warning-alert/warning-alert.component';
import {SuccessAlertComponent} from './success-alert/success-alert.component';
import {FormsModule} from "@angular/forms";
import { UserComponent } from './user-component/user-component.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
