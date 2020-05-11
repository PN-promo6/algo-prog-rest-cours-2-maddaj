import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../models/event/event';

@Component({
  selector: 'app-events-preview',
  templateUrl: './events-preview.component.html',
  styleUrls: ['./events-preview.component.css']
})
export class EventsPreviewComponent implements OnInit {

  @Input() event: Event[];

  constructor() { }

  ngOnInit() {
  }

}
