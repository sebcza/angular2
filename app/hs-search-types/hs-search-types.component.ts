import {Component} from "angular2/core";
import {HsSearchType} from "../hs-search-type/hs-search-type.component";

@Component({
    selector: 'hs-search-types',
    templateUrl: 'app/hs-search-types/hs-search-types.component.html',
    directives: [HsSearchType]
})
export class HsSearchTypes {
    
}