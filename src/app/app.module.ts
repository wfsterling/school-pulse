import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from '../assets/theme/pulse-1.0/material.module';
import { AlertBarComponent } from './alert-bar/alert-bar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CheckinComponent } from './checkin/checkin.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AiBubbleComponent } from './checkin/ai-bubble/ai-bubble.component';
import { MoodSelectComponent } from './checkin/mood-select/mood-select.component';
import { HelpComponent } from './help/help.component';
import { TipComponent } from './tip/tip.component';
import { AccountComponent } from './account/account.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    AlertBarComponent,
    MainMenuComponent,
    CheckinComponent,
    AiBubbleComponent,
    MoodSelectComponent,
    HelpComponent,
    TipComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      'radius': 60,
      'space': -10,
      'outerStrokeWidth': 10,
      'outerStrokeColor': '#4882c2',
      'innerStrokeColor': '#e7e8ea',
      'innerStrokeWidth': 10,
      'title': 'UI',
      'animateTitle': false,
      'animationDuration': 1000,
      'showUnits': false,
      'showBackground': false,
      'clockwise': false,
      'startFromZero': false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
