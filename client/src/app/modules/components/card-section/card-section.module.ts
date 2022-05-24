import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSectionComponent } from './card-section.component';
import {CardModule} from "../card/card.module";
import {IsVisibleModule} from "../../../core/directives/is-visible.module";



@NgModule({
    declarations: [
        CardSectionComponent
    ],
    exports: [
        CardSectionComponent
    ],
    imports: [
        CommonModule,
        CardModule,
        IsVisibleModule
    ]
})
export class CardSectionModule { }
