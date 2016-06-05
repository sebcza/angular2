import {Component, OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
import {CardService} from "../cards/card.service";
import {ICard} from "../cards/card";
@Component({
    templateUrl: 'app/hs-card-detail/hs-card-detail.component.html'
})
export class HsCardDetail implements OnInit{
    errorMessage: string;
    id: string;
    card: ICard;

    constructor(private _routeParams: RouteParams,
                private _cardService: CardService) {
    }

    ngOnInit() {
        this.id = this._routeParams.get('id');
        this.getCard(this.id);
    }

    private getCard(id: string) {
        this._cardService.getById(id)
            .subscribe(
                (card: ICard[]) => {
                    console.log(card);
                    this.card = card[0];
                },
                error => this.errorMessage = <any>error
            );
    }
}