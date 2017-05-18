import {Component} from '@angular/core'
@Component({
    selector:'event-list',
    templateUrl:'/app/events/event-list.component.html' 
        
    
})
export class EventsListComponent{
    event1={
        id:1,
        name:'Angular Connect',
        date:'9/23/2017',
        time:'10:00 am',
        price: 599.99,
        imageUrl:'/app/assets/images/angularconnect-shield.png',
        location:{
            address:'9533 UT',
            city: 'Charlotte',
            country:'USA'
        }
    }
}