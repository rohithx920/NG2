import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver





} from './events/index'

import { AppComponent } from './app.component';

// import {EventsListComponent} from './events/events-list.component';

// import {EventThumbnailComponent} from './events/event-thumbnail.component'

import {NavBarComponent} from './nav/navbar.component';

//import { EventService } from './events/shared/event.service'

import {ToastService} from './common/toastr.service'

//import {EventDetailsComponent} from './events/event-details/event-details.component'

import {appRoutes} from './routes'

//import {CreateEventComponent} from './events/create-event.component'

import {Error404Component} from './errors/404.component'
//import {EventRouteActivator} from './events/event-details/event-route-activator.service'
//import {EventListResolver} from './events/events-list-resolver.service'

@NgModule({
  imports: [BrowserModule,
  RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
   ],
  bootstrap: [AppComponent],
  providers: [
    EventService,
    ToastService, 
    EventRouteActivator,
    EventListResolver,
    {provide:'canDeactivateCreateEvent',
     useValue:checkDirtyState
    }
    
    ]


})
export class AppModule {}
  
 function checkDirtyState(component:CreateEventComponent){
   if(component.isDirty)
    return window.confirm('You have not saved this event do you really want to cancel?? ')
    return true;
  }
