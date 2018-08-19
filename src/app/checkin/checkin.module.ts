import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiBubbleComponent } from './ai-bubble/ai-bubble.component';
import { MoodSelectComponent } from './mood-select/mood-select.component';
import {MatSliderModule} from '@angular/material/slider';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    AiBubbleComponent,
    MoodSelectComponent,
    MatSliderModule
  ],
  declarations: []
})
export class CheckinModule { }
