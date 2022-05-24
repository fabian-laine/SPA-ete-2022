import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhySectionComponent } from './why-section.component';



@NgModule({
    declarations: [
        WhySectionComponent
    ],
    exports: [
        WhySectionComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class WhySectionModule { }
