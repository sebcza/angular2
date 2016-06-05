import {Component, Input} from "angular2/core";
import {ICard} from "../cards/card";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'hs-cards-table',
    templateUrl: 'app/hs-cards-table/hs-cards-table.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class HsCardsTable {
    @Input() cards: ICard[]
}