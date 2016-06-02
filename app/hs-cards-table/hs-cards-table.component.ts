import {Component, Input} from "angular2/core";
import {ICard} from "../cards/card";

@Component({
    selector: 'hs-cards-table',
    templateUrl: 'app/hs-cards-table/hs-cards-table.component.html'
})
export class HsCardsTable {
    @Input() cards: ICard[]
    
}