"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var index_1 = require("./events/index");
var app_component_1 = require("./app.component");
// import {EventsListComponent} from './events/events-list.component';
// import {EventThumbnailComponent} from './events/event-thumbnail.component'
var navbar_component_1 = require("./nav/navbar.component");
//import { EventService } from './events/shared/event.service'
var toastr_service_1 = require("./common/toastr.service");
//import {EventDetailsComponent} from './events/event-details/event-details.component'
var routes_1 = require("./routes");
//import {CreateEventComponent} from './events/create-event.component'
var _404_component_1 = require("./errors/404.component");
//import {EventRouteActivator} from './events/event-details/event-route-activator.service'
//import {EventListResolver} from './events/events-list-resolver.service'
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(routes_1.appRoutes)],
        declarations: [
            app_component_1.AppComponent,
            index_1.EventsListComponent,
            index_1.EventThumbnailComponent,
            navbar_component_1.NavBarComponent,
            index_1.EventDetailsComponent,
            index_1.CreateEventComponent,
            _404_component_1.Error404Component
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            index_1.EventService,
            toastr_service_1.ToastService,
            index_1.EventRouteActivator,
            index_1.EventListResolver,
            { provide: 'canDeactivateCreateEvent',
                useValue: checkDirtyState
            }
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
function checkDirtyState(component) {
    if (component.isDirty)
        return window.confirm('You have not saved this event do you really want to cancel?? ');
    return true;
}
//# sourceMappingURL=app.module.js.map