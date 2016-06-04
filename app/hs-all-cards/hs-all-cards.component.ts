import {Component} from "angular2/core";
import {HsSearchAll} from "../hs-search-all/hs-search-all.component";
import {ICard} from "../cards/card";
import {HsCardsTable} from "../hs-cards-table/hs-cards-table.component";

@Component({
    selector: 'hs-all-cards',
    templateUrl: 'app/hs-all-cards/hs-all-cards.component.html',
    directives: [HsSearchAll, HsCardsTable]
})
export class HsAllCards {
    cards: ICard[];

    setCards(cards: ICard[]) {
        this.cards = cards;
    }
}