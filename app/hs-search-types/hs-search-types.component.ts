import {Component, OnInit} from "angular2/core";
import {HsSearchType} from "../hs-search-type/hs-search-type.component";
import {ICardInfo} from "../cards/card-info";
import {CardInfoService} from "../cards/card-info.service";
import {FORM_DIRECTIVES} from "angular2/common";

@Component({
    selector: 'hs-search-types',
    templateUrl: 'app/hs-search-types/hs-search-types.component.html',
    directives: [HsSearchType, FORM_DIRECTIVES],
    providers: [CardInfoService]
})
export class HsSearchTypes implements OnInit {
    cardsInfo: ICardInfo;
    errorMessage: string;

    constructor(private _cardInfoService: CardInfoService) {

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
        console.log('search items ', item);
    }
}