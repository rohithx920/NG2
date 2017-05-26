import {Component, OnInit} from '@angular/core'
import { EventService } from './shared/event.service'
import {ToastService } from '../common/toastr.service'
import {ActivatedRoute} from '@angular/router'
@Component({
    //selector:'event-list',
    templateUrl:'/app/events/event-list.component.html' 
    
})
export class EventsListComponent implements OnInit{
    events: any;
    
    constructor(private eventService: EventService, private toastr:ToastService, private route:ActivatedRoute ){
      
    }
    ngOnInit() {
      //this.eventService.getEvents().subscribe(events=>{this.events =events});
      this.events=this.route.snapshot.data['events']
    }
    handleThumbnailCLick(eventName){
     this.toastr.success(eventName);   
    }
    
}