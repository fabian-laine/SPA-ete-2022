import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftBoardComponent } from './gift-board.component';
import {GiftBadgeModule} from "../gift-badge/gift-badge.module";



@NgModule({
    declarations: [
        GiftBoardComponent
    ],
    exports: [
        GiftBoardComponent
    ],
    imports: [
        CommonModule,
        GiftBadgeModule
    ]
})
export class GiftBoardModule { }
