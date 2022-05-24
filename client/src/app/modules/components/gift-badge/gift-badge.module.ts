import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftBadgeComponent } from './gift-badge.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        GiftBadgeComponent
    ],
    exports: [
        GiftBadgeComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class GiftBadgeModule { }
