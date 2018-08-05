import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiBubbleComponent } from './ai-bubble/ai-bubble.component';
import { MoodSelectComponent } from './mood-select/mood-select.component';


@NgModule({
  imports: [
    CommonModule,
    AiBubbleComponent,
    MoodSelectComponent
  ],
  declarations: []
})
export class CheckinModule { }
