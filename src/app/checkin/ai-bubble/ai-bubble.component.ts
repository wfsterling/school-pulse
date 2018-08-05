import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ai-bubble',
  templateUrl: './ai-bubble.component.html',
  styleUrls: ['./ai-bubble.component.scss']
})
export class AiBubbleComponent implements OnInit {
  bubbleMessage= 'Hey Xana Roo Poopa Choo, how are you feeling today?'
  constructor() { }

  ngOnInit() {
  }

}
