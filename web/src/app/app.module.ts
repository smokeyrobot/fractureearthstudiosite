import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MissionStatementComponent } from './mission-statement/mission-statement.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionStatementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
