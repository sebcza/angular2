import {Component, Input} from "angular2/core";

@Component({
    selector: 'hs-search-type',
    templateUrl: 'app/hs-search-type/hs-search-type.component.html'
})
export class HsSearchType {
    @Input() items: string[];
}