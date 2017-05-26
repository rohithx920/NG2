"use strict";
var index_1 = require("./events/index");
//import {EventsListComponent} from './events/events-list.component'
//import {EventDetailsComponent} from './events/event-details/event-details.component'
//import {CreateEventComponent} from './events/create-event.component'
var _404_component_1 = require("./errors/404.component");
//import {EventRouteActivator} from './events/event-details/event-route-activator.service' 
//import {EventListResolver} from './events/events-list-resolver.service'
exports.appRoutes = [
    { path: 'events/new', component: index_1.CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent'] },
    { path: '404', component: _404_component_1.Error404Component },
    { path: 'events', component: index_1.EventsListComponent, resolve: { events: index_1.EventListResolver } },
    { path: 'events/:id', component: index_1.EventDetailsComponent, canActivate: [index_1.EventRouteActivator] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];
//# sourceMappingURL=routes.js.map