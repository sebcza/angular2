import {Component} from "angular2/core";
import {HsSearchAll} from "../hs-search-all/hs-search-all.component";

@Component({
    selector: 'hs-all-cards',
    templateUrl: 'app/hs-all-cards/hs-all-cards.component.html',
    directives: [HsSearchAll]
})
export class HsAllCards {

}