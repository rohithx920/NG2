import {Component, OnInit} from '@angular/core'
import { EventService } from './shared/event.service'
import {ToastService } from '../common/toastr.service'
@Component({
    //selector:'event-list',
    templateUrl:'/app/events/event-list.component.html' 
    
})
export class EventsListComponent implements OnInit{
    events: any[];
    
    constructor(private eventService: EventService, private toastr:ToastService ){
      
    }
    ngOnInit() {
      this.events =this.eventService.getEvents();
    }
    handleThumbnailCLick(eventName){
     this.toastr.success(eventName);   
    }
    
}