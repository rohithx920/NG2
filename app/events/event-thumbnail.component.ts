import {Component, Input, Output, EventEmitter} from '@angular/core'
@Component({
    selector: 'event-thumbnail',
    template:
    `
    <div [routerLink]="['/events',event.id]" class="well hoverwell thumbanail">
                <h2> {{event?.name}}</h2>
                <div> Date:{{event?.date}}</div>
                <div [class.green]="event?.time== '8:00 am'" [ngSwitch]="event?.time"> 
                    Time: {{event?.time}}
                    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                    <span *ngSwitchDefault>(Normal Start)</span> 
                
                </div>
                <div> Price:\${{event?.price}}</div>
                <div>
                    <span>Location:{{event?.location?.address}}</span>
                    <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
                </div>
                
                <div [hidden]="!event?.link">Online Link: {{event?.link}}</div>

                
    </div>

    `,
    styles:[`
    .green { color: #00330 !important; }
    .thumbanail {min-height: 210px; }
    .pad-left {margin-left:10px; }
    .well div {color: #bbb;}
    `]

})
export class EventThumbnailComponent{
   @Input() event:any;
   //public properties 
   
   
}