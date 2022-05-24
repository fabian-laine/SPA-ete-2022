import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftSectionComponent } from './gift-section.component';
import {GiftBoardModule} from "../gift-board/gift-board.module";



@NgModule({
    declarations: [
        GiftSectionComponent
    ],
    exports: [
        GiftSectionComponent
    ],
    imports: [
        CommonModule,
        GiftBoardModule
    ]
})
export class GiftSectionModule { }
