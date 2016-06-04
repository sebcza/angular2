import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HsSearchDashboardComponent } from './hs-search-dashboard/hs-search-dashboard.component';
import {HsAllCardsComponent} from "./hs-all-cards/hs-all-cards.component";

@Component({
  selector: 'hearthstone-app',
  template: `
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['All']">All cards</a>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/dashboard', as: 'Dashboard', component: HsSearchDashboardComponent, useAsDefault: true },
  { path: '/all', as: 'All', component: HsAllCardsComponent}
])
export class AppComponent { }
