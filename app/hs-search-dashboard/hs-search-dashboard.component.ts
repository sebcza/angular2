import { Component } from 'angular2/core';
import { HsSearchTypes } from '../hs-search-types/hs-search-types.component';
import {ICard} from "../cards/card";
import {HsCardsTable} from "../hs-cards-table/hs-cards-table.component";

@Component({
    selector: 'hs-search-dashboard',
    templateUrl: 'app/hs-search-dashboard/hs-search-dashboard.component.html',
    directives: [HsSearchTypes, HsCardsTable]
})
export class HsSearchDashboard {
    cards: ICard[];

    displayCards(cards: ICard[]) {
        this.cards = cards;
    }
}
