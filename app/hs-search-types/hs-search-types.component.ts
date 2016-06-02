import {Component, OnInit, Output, EventEmitter} from "angular2/core";
import {HsSearchType} from "../hs-search-type/hs-search-type.component";
import {ICardInfo} from "../cards/card-info";
import {CardInfoService} from "../cards/card-info.service";
import {FORM_DIRECTIVES} from "angular2/common";
import {CardService} from "../cards/card.service";
import {ICard} from "../cards/card";

@Component({
    selector: 'hs-search-types',
    templateUrl: 'app/hs-search-types/hs-search-types.component.html',
    directives: [HsSearchType, FORM_DIRECTIVES],
    providers: [CardInfoService, CardService]
})
export class HsSearchTypes implements OnInit {
    @Output() cardsReceived: EventEmitter<ICard[]> = new EventEmitter<ICard[]>();
    cardsInfo: ICardInfo;
    errorMessage: string;

    constructor(private _cardInfoService: CardInfoService,
                private _cardService: CardService) {

    }

    ngOnInit(): void {
        this._cardInfoService.getInfo()
            .subscribe(
                cardsInfo => {
                    this.cardsInfo = cardsInfo
                },
                error => this.errorMessage = <any>error
            )
    }

    searchItems(item: string): void {
        this._cardService.getByParam(item)
            .subscribe(
                cards => {
                    this.cardsReceived.emit(cards);
                },
                error => this.errorMessage = <any>error
            );
    }
}