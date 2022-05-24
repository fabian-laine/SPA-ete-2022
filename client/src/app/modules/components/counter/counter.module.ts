import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import {CounterUnitModule} from "../counter-unit/counter-unit.module";



@NgModule({
    declarations: [
        CounterComponent
    ],
    exports: [
        CounterComponent
    ],
  imports: [
    CommonModule,
    CounterUnitModule
  ]
})
export class CounterModule { }
