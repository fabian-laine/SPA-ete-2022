import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftFixedButtonComponent } from './gift-fixed-button.component';



@NgModule({
    declarations: [
        GiftFixedButtonComponent
    ],
    exports: [
        GiftFixedButtonComponent
    ],
    imports: [
        CommonModule
    ]
})
export class GiftFixedButtonModule { }
