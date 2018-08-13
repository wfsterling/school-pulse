import { Component, OnInit } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-mood-select',
  templateUrl: './mood-select.component.html',
  styleUrls: ['./mood-select.component.scss']
})
export class MoodSelectComponent implements OnInit {

  angle = 160;
  degreeChange = 3;
  moodTitle = 'Pretty OK';
  moodOptions = '[Fine, Normal, Chill, Nothing new...]';

  constructor() { }

  ngOnInit() {
  }

}
