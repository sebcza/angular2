import {Component, Output, EventEmitter} from "angular2/core";
import {FormBuilder, ControlGroup, Validators, AbstractControl} from "angular2/common";
import {CardService} from "../cards/card.service";
import {ICard} from "../cards/card";

@Component({
    selector: 'hs-search-all',
    templateUrl: 'app/hs-search-all/hs-search-all.component.html',
    styleUrls: ['app/hs-search-all/hs-search-all.component.css']
})
export class HsSearchAll {
    @Output() cardsReceived: EventEmitter<ICard[]> = new EventEmitter<ICard[]>();
    nameForm: ControlGroup;
    name: AbstractControl;
    errorMessage: string;

    constructor(private fb: FormBuilder, private _cardService: CardService) {
        this.nameForm = fb.group({
            'name': ['', Validators.required]
        });

        this.name = this.nameForm.controls['name'];
    }

    searchCard(name: string) {
        this._cardService.getByName(name)
            .subscribe(
                (cards: ICard[]) => {
                    this.cardsReceived.emit(cards);
                },
                (error: any) => this.errorMessage = <any>error
            );
    }
}