import {Component, Input, Output, EventEmitter} from '@angular/core'
@Component({
    selector: 'event-thumbnail',
    template:
    `
    <div class="well hoverwell thumbanil">
                <h2> {{event.name}}</h2>
                <div> Date:{{event.date}}</div>
                <div> Time: {{event.time}}</div>
                <div> Price:\${{event.price}}</div>
                <div>
                    <span>Location:{{event.location.address}}</span>
                    <span> &nbsp;</span>
                    <span>{{event.location.city}}, {{event.location.country}}</span>
                </div>
                <div>
                <button class="btn btn-primary" (click)='ClickedOnMe()'>Click Me!!</button> 
                </div>
    </div>

    `
})
export class EventThumbnailComponent{
   @Input() event:any;
   @Output() eventClick =new EventEmitter();
   ClickedOnMe(){
        console.log('Button clicked');
        this.eventClick.emit('foo');
   }
   handleEventClicked(data){
        console.log('received'+data);
   }
}