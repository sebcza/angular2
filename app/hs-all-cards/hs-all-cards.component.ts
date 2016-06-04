import {Component} from "angular2/core";
import {HsSearchAll} from "../hs-search-all/hs-search-all.component";
import {ICard} from "../cards/card";
import {HsCardsTable} from "../hs-cards-table/hs-cards-table.component";
import {CardService} from "../cards/card.service";

@Component({
    selector: 'hs-all-cards',
    templateUrl: 'app/hs-all-cards/hs-all-cards.component.html',
    directives: [HsSearchAll, HsCardsTable]
})
export class HsAllCards {
    cards: ICard[];
    errorMessage: string;
    
    constructor(private _cardService: CardService) {
        
    }

    setCards(cards: ICard[]) {
        this.cards = cards;
    }

    setAllCards() {
        this._cardService.getAll()
            .subscribe(
                (cards: ICard[]) => {
                    
                },
                (error: any) => this.errorMessage = <any>error
            );
    }
}