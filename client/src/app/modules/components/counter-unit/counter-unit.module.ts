import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterUnitComponent } from './counter-unit.component';



@NgModule({
    declarations: [
        CounterUnitComponent
    ],
    exports: [
        CounterUnitComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CounterUnitModule { }
