import { Component } from 'angular2/core';
import { HsSearchTypes } from '../hs-search-types/hs-search-types.component';

@Component({
    selector: 'hs-search-dashboard',
    templateUrl: 'app/hs-search-dashboard/hs-search-dashboard.component.html',
    directives: [HsSearchTypes]
})
export class HsSearchDashboardComponent {

}
