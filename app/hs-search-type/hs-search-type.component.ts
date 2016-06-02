import {Component, Input, Output, EventEmitter} from "angular2/core";
import {
    FORM_DIRECTIVES, CORE_DIRECTIVES, FormBuilder, Validators, ControlGroup,
    AbstractControl
} from "angular2/common";

@Component({
    selector: 'hs-search-type',
    templateUrl: 'app/hs-search-type/hs-search-type.component.html',
    directives:[FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class HsSearchType {
    @Input() items: string[];
    @Output() itemChosen: EventEmitter<string> = new EventEmitter<string>();
    typeForm: ControlGroup;
    type: AbstractControl;

    constructor(fb: FormBuilder) {
        this.typeForm = fb.group({
            'type': ['', Validators.required]
        });

        this.type = this.typeForm.controls['type'];
    }

    onSubmit(value: any): void {
        this.itemChosen.emit(value.type);
    }
}