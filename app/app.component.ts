import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HsSearchDashboardComponent } from './hs-search-dashboard/hs-search-dashboard.component';

@Component({
  selector: 'hearthstone-app',
  template: `
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@RouteConfig([
  { path: '/dashboard', as: 'Dashboard', component: HsSearchDashboardComponent, useAsDefault: true },
])
export class AppComponent { }
