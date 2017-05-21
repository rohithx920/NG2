import {Component, OnInit} from '@angular/core'
import { EventService } from './shared/event.service'
@Component({
    selector:'event-list',
    templateUrl:'/app/events/event-list.component.html' 
    
})
export class EventsListComponent implements OnInit{
    events: any[];
    
    constructor(private eventService: EventService ){
      
    }
    ngOnInit() {
      this.events =this.eventService.getEvents();
    }
    
}