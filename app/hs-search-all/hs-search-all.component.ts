import {Component, Output, EventEmitter} from "angular2/core";
import {ICard} from "../cards/card";
import {FormBuilder, ControlGroup, Validators, AbstractControl} from "angular2/common";

@Component({
    selector: 'hs-search-all',
    templateUrl: 'app/hs-search-all/hs-search-all.component.html',
    styleUrls: ['app/hs-search-all/hs-search-all.component.css']
})
export class HsSearchAll {
    @Output() cardsSearched: EventEmitter<string> = new EventEmitter<string>();
    nameForm: ControlGroup;
    name: AbstractControl;

    constructor(fb: FormBuilder) {
        this.nameForm = fb.group({
            'name': ['', Validators.required]
        });

        this.name = this.nameForm.controls['name'];
    }

    searchCard(name: string) {
        console.log('card name ', name);
    }
}