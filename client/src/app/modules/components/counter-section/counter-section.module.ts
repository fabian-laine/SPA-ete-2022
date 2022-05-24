import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterSectionComponent } from './counter-section.component';
import {CounterModule} from "../counter/counter.module";
import {IsVisibleModule} from "../../../core/directives/is-visible.module";



@NgModule({
  declarations: [
    CounterSectionComponent
  ],
  exports: [
    CounterSectionComponent
  ],
    imports: [
        CommonModule,
        CounterModule,
        IsVisibleModule,
    ]
})
export class CounterSectionModule { }
