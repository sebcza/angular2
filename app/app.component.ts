import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HsSearchDashboard } from './hs-search-dashboard/hs-search-dashboard.component';
import {HsAllCards} from "./hs-all-cards/hs-all-cards.component";
import {CardInfoService} from "./cards/card-info.service";
import {CardService} from "./cards/card.service";

@Component({
  selector: 'hearthstone-app',
  template: `
    <div class="text-center">
      <a [routerLink]="['Dashboard']" class="btn btn-default btn-lg">Search for cards</a>
      <a [routerLink]="['All']" class="btn btn-default btn-lg">All cards</a>
    </div> 
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, CardInfoService, CardService]
})
@RouteConfig([
  { path: '/dashboard', as: 'Dashboard', component: HsSearchDashboard, useAsDefault: true },
  { path: '/all', as: 'All', component: HsAllCards}
])
export class AppComponent { }
