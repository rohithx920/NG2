import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'


import { AppComponent } from './app.component';

import {EventsListComponent} from './events/events-list.component';

import {EventThumbnailComponent} from './events/event-thumbnail.component'

import {NavBarComponent} from './nav/navbar.component';

import { EventService } from './events/shared/event.service'

import {ToastService} from './common/toastr.service'

import {EventDetailsComponent} from './events/event-details/event-details.component'

import {appRoutes} from './routes'
@NgModule({
  imports: [BrowserModule,
  RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent,EventsListComponent,EventThumbnailComponent,NavBarComponent,EventDetailsComponent ],
  bootstrap: [AppComponent],
  providers: [EventService,ToastService] 

})
export class AppModule { }
