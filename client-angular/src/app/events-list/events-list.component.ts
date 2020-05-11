import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data-service/data.service';
import { Event } from '../models/event/event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

export class EventsListComponent implements OnInit {

  events: Event[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchEvents()
      .subscribe(
        res => {
          this.events = res;// permet de récupérer dans une variable les données stockées dans l'observable 
        },
        error => {
          console.log(error)
        },
      )
  }

}
