import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {HeaderModule} from "../../components/header/header.module";
import {GiftFixedButtonModule} from "../../components/gift-fixed-button/gift-fixed-button.module";
import {HeroModule} from "../../components/hero/hero.module";
import {CounterSectionModule} from "../../components/counter-section/counter-section.module";
import {WhySectionModule} from "../../components/why-section/why-section.module";
import {CardSectionModule} from "../../components/card-section/card-section.module";
import {GiftSectionModule} from "../../components/gift-section/gift-section.module";
import {FooterModule} from "../../components/footer/footer.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        HeaderModule,
        GiftFixedButtonModule,
        HeroModule,
        CounterSectionModule,
        WhySectionModule,
        CardSectionModule,
        GiftSectionModule,
        FooterModule
    ]
})
export class HomeModule { }
