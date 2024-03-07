  }
  }
import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events:Event[]=[];
  title: string = '';
  date: string = '';
  description: string = '';
  location: string = '';
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getAllEvents().subscribe((events) => {
      this.events = events;
      this.title = '';
      this.date = '';
      this.description = '';
      this.location = '';
    });
  }
}
