import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroComponent} from './hero.component';
import {ModalVideoModule} from "../modal-video/modal-video.module";


@NgModule({
  declarations: [
    HeroComponent
  ],
  exports: [
    HeroComponent
  ],
  imports: [
    CommonModule,
    ModalVideoModule
  ]
})
export class HeroModule {
}
